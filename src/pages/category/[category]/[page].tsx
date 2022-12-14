import { Box, Container } from '@mui/material'
import { memo } from 'react'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useRouter } from 'next/router'

// Layouts
import Header from '@layouts/Header'

// Services
import { getDataContent } from '@services/restClient'

// Components
import CardPost from '@components/CardPost'
import Widget from '@components/Widget'
import Button from '@components/Button'

// Constants
import { MOCK_CATEGORY_ITEMS } from '@constants/__mock__/mockData'
import { INDEX_PAGE, ITEM_PER_PAGE } from '@constants/index'
import { DEFAULT_HEADER_URL } from '@constants/router'

// Types
import { IListPost } from '@self-types/ListPost.types'
import { BlogProps } from '@self-types/BlogProps.types'

export interface CategoryDetailProps {
  posts: {
    fields: IListPost[]
  }[]
}

export const getStaticPaths: GetStaticPaths = async () => {
  const responseCategory = await getDataContent({
    typeContent: 'category',
  })

  const pathsName = await Promise.all(
    responseCategory.map(async (item) => {
      const { slug } = item.fields as { slug: string }

      const slugUrl = slug === 'most-views' ? 'blog' : slug

      // Get data by category
      const categoryItem = await getDataContent({
        typeContent: 'blogPost',
        query: {
          'fields.categories': `${slugUrl}`,
        },
      })

      // Calculator total Page
      const totalPage = Math.ceil(categoryItem.length / ITEM_PER_PAGE)

      return Array.from(
        {
          length: totalPage,
        },
        (_, i) => {
          return {
            params: {
              category: slug,
              page: (i + 1).toString(),
            },
          }
        },
      )
    }),
  )

  return {
    paths: await pathsName.flat(),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await getDataContent({
    typeContent: 'blogPost',
    skip: (parseInt(params?.page as string, 10) - 1) * ITEM_PER_PAGE,
    limit: ITEM_PER_PAGE,
    query: {
      'fields.categories': `${
        params?.category === 'most-views' ? 'blog' : params?.category
      }`,
      'fields.view[gte]': `${params?.category === 'most-views' ? '500' : '0'}`,
    },
  })

  const listPosts = response.map((post) => {
    return { fields: post.fields, sys: post.sys }
  })

  return {
    props: {
      posts: listPosts,
    },
    revalidate: 60,
  }
}

const CategoryPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()

  const listBlog = posts.map((post: BlogProps) => post.fields)

  const renderContentBlog = () => {
    return listBlog.map((blog: IListPost) => (
      <CardPost
        key={blog.slug}
        image={`${blog.heroImage[0].url}`}
        headerContent={blog.title}
        shortContent={blog.description}
        view={blog.view}
        href={blog.slug}
      />
    ))
  }

  const handleGetOlderPosts = () => {
    router.push({
      pathname: `${DEFAULT_HEADER_URL.MOST_VIEW.URL}`,
      query: {
        page: INDEX_PAGE + 1,
      },
    })
  }

  const handleGetNewerPosts = () => {
    router.back()
  }

  return (
    <>
      <Header
        pageTitle="Most Views"
        breadCrumbs={[
          {
            link: MOCK_CATEGORY_ITEMS[3].name,
            href: MOCK_CATEGORY_ITEMS[3].slug,
          },
        ]}
      />
      <Box component="main">
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
          }}
        >
          <Box maxWidth="100%" marginRight="20px">
            {renderContentBlog()}
            <Box display="flex" width="100%" justifyContent="space-between">
              <Button
                variant="contained"
                startIcon={<ArrowBackIcon />}
                sx={{
                  width: '45%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '15px',
                }}
                onClick={handleGetOlderPosts}
              >
                Older posts
              </Button>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  width: '45%',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
                onClick={handleGetNewerPosts}
              >
                Newer posts
              </Button>
            </Box>
          </Box>
          <Box
            minWidth="25%"
            sx={{
              marginTop: {
                xs: '50px',
                md: '0px',
              },
            }}
          >
            {/* Recent Post */}
            <Widget
              widgetsItem={listBlog.map((blog: IListPost) => {
                return { name: blog.title, slug: blog.slug }
              })}
              title="Recent Post"
            />

            {/* Category */}
            <Widget widgetsItem={MOCK_CATEGORY_ITEMS} title="Category" />
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default memo(CategoryPage)

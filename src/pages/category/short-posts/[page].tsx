import { Box, Container } from '@mui/material'
import { memo } from 'react'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { Document } from '@contentful/rich-text-types'
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
import { CATEGORY_ITEMS } from '@constants/__mock__/mockData'
import { INDEX_PAGE, ITEM_PER_PAGE } from '@constants/index'

export interface IListPost {
  heroImage: {
    fields: {
      file: {
        url: string
      }
      title: string
    }
  }
  title: string
  description: Document
  view: string
  slug: string
}

export interface CategoryDetailProps {
  posts: {
    fields: IListPost[]
  }[]
}

export const getStaticPaths: GetStaticPaths = async () => {
  await getDataContent({
    typeContent: 'category',
  })

  const response = await getDataContent({
    typeContent: 'blogPost',
    query: { 'fields.categories': 'short-posts' },
  })

  const totalPage = Math.ceil(response.length / ITEM_PER_PAGE)

  const paths = Array.from(
    {
      length: totalPage,
    },
    (_, i) => {
      return {
        params: {
          page: (i + 1).toString(),
        },
      }
    },
  )

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await getDataContent({
    typeContent: 'blogPost',
    skipValue: (parseInt(params?.page as string, 10) - 1) * ITEM_PER_PAGE,
    limitResults: ITEM_PER_PAGE,
    query: { 'fields.categories': 'short-posts' },
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

const ShortPostListPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()

  const listBlog = posts.map(
    (post: InferGetStaticPropsType<typeof getStaticProps>) => post.fields,
  )

  const renderContentBlog = () => {
    return listBlog.map((blog: IListPost) => (
      <CardPost
        key={blog.slug}
        image={`https:${blog.heroImage.fields.file.url}`}
        alt={blog.heroImage.fields.title}
        headerContent={blog.title}
        shortContent={blog.description}
        view={blog.view}
        href={blog.slug}
      />
    ))
  }

  const handleGetOlderPosts = () => {
    router.push(`/short-posts/${INDEX_PAGE + 1}`)
  }

  const handleGetNewerPosts = () => {
    router.back()
  }

  return (
    <>
      <Header
        pageTitle="Short Posts"
        breadCrumbs={[
          { link: CATEGORY_ITEMS[2].name, href: CATEGORY_ITEMS[2].slug },
        ]}
      />
      <Box component="main">
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
          }}
        >
          <Box maxWidth="100%" marginRight="20px">
            {renderContentBlog()}
            <Box display="flex" width="100%" justifyContent="space-between">
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
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
                startIcon={<ArrowBackIcon />}
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
          <Box minWidth="25%">
            {/* Recent Post */}
            <Widget
              widgetsItem={listBlog.map((blog: IListPost) => {
                return { name: blog.title, slug: blog.slug }
              })}
              title="Recent Post"
            />

            {/* Category */}
            <Widget widgetsItem={CATEGORY_ITEMS} title="Category" />
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default memo(ShortPostListPage)

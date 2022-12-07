import { useCallback } from 'react'
import Header from '@layouts/Header'
import { Box, Container } from '@mui/material'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useRouter } from 'next/router'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'

// Services
import { getDataContent } from '@services/restClient'

// Constants
import { MOCK_CATEGORY_ITEMS } from '@constants/__mock__/mockData'

// Components
import Widget from '@components/Widget'
import Button from '@components/Button'

// Types
import { IPostDetail } from '@self-types/PostDetail.types'
import { BlogProps } from '@self-types/BlogProps.types'

// Utils
import { options } from '@utils/configOptionsContentful'

export type TPath = {
  fields: {
    slug: string
  }
}
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await getDataContent({
    typeContent: 'blogPost',
  })

  const paths = response.map((path) => {
    const url = path.fields as unknown as { slug: string }

    return {
      params: {
        slug: url.slug,
      },
    }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const response = await getDataContent({
    typeContent: 'blogPost',
    query: { 'fields.slug[in]': `${params?.slug}` },
    preview,
  })

  const [previous, next] = await Promise.all([
    // Previous Post
    await getDataContent({
      typeContent: 'blogPost',
      order: '-sys.createdAt',
      limit: 1,
      query: {
        'sys.createdAt[lt]': `${response.map((item) => item.sys.createdAt)}`,
      },
    }),

    // Next Post
    await getDataContent({
      typeContent: 'blogPost',
      order: 'sys.createdAt',
      limit: 1,
      query: {
        'sys.createdAt[gt]': `${response.map((item) => item.sys.createdAt)}`,
      },
    }),
  ])

  const postDetail = response.map((post) => {
    return { fields: post.fields, sys: post.sys }
  })

  return {
    props: {
      recipe: postDetail,
      previous,
      next,
    },
  }
}

const PostDetail = ({
  recipe,
  previous,
  next,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()

  // Current Post
  const post = recipe.map((item: BlogProps) => item.fields)

  // Previous Post
  const previousPost = previous.map((postItem: BlogProps) => {
    const path = postItem.fields as unknown as { title: string; slug: string }

    return {
      name: path.title,
      href: path.slug,
    }
  })

  // Next Post
  const nextPost = next.map((postItem: BlogProps) => {
    const path = postItem.fields as unknown as { title: string; slug: string }

    return {
      name: path.title,
      href: path.slug,
    }
  })

  const handleGetOlderPosts = useCallback(() => {
    router.push(`/${previousPost[0].href}`)
  }, [previousPost, router])

  const handleGetNewerPosts = useCallback(() => {
    router.push(`/${nextPost[0].href}`)
  }, [nextPost, router])

  return (
    <>
      {post.map((item: IPostDetail) => {
        return (
          <Box key={item.slug}>
            <Header
              pageTitle={item.title}
              breadCrumbs={[{ link: item.title, href: item.slug }]}
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
                  {/* Contents */}

                  <Image
                    src={item.heroImage[0].url}
                    width="1200"
                    height="500"
                    alt={item.slug}
                    quality={40}
                    loading="eager"
                    sizes="(min-width: 600px) 90vw, 60vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                  <Box
                    lineHeight="35px"
                    letterSpacing="0.7px"
                    marginTop={3}
                    marginBottom={5}
                  >
                    {documentToReactComponents(
                      item.content,
                      options as unknown as undefined,
                    )}
                  </Box>
                  {/* Button next/previous post */}
                  <Box
                    display="flex"
                    width="100%"
                    justifyContent="space-between"
                  >
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
                      {previousPost[0]?.name as string}
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
                      {nextPost[0]?.name as string}
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
                  {/* Category */}
                  <Widget widgetsItem={MOCK_CATEGORY_ITEMS} title="Category" />
                </Box>
              </Container>
            </Box>
          </Box>
        )
      })}
    </>
  )
}
export default PostDetail

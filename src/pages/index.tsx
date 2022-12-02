import { Box, Container, Typography, useTheme } from '@mui/material'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// Layouts
import Header from '@layouts/Header'
import { getDataContent } from '@services/restClient'

// Types
import { IContentHome } from '@self-types/ContentHome.types'
import { options } from '@utils/configOptionsContentful'

export const getStaticProps: GetStaticProps = async () => {
  const response = await getDataContent({
    typeContent: 'homePage',
  })

  return {
    props: {
      recipes: response,
    },
  }
}

const Home = ({ recipes }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const theme = useTheme()

  const contents = recipes.map(
    (item: InferGetStaticPropsType<typeof getStaticProps>) => item.fields,
  )

  const renderContentHomePage = () => {
    return contents.map((content: IContentHome) => (
      <Box component="main" key={content.author}>
        <Box component="section" textAlign="center">
          <Typography
            variant="h2"
            marginBottom="10px"
            fontSize="28px"
            lineHeight="35px"
          >
            Code your life in an elegant way
          </Typography>

          <Typography
            variant="h3"
            fontSize="20px"
            lineHeight="28px"
            marginBottom="20px"
          >
            {`by ${content.author}`}
          </Typography>
          <Image
            src={`${content.image[0].url}`}
            alt="avatar"
            width={200}
            height={200}
            style={{
              borderRadius: '103% 103% 103% 103%',
              marginBottom: '70px',
            }}
            loading="eager"
          />
        </Box>
        <Box component="section" bgcolor={theme.palette.primary.main}>
          <Container maxWidth="md">
            <Box padding="10px">
              <Typography
                textAlign="center"
                fontWeight={600}
                marginBottom="30px"
              >
                Xin chào!
              </Typography>
              <Box lineHeight="35px" letterSpacing="0.7px">
                {documentToReactComponents(
                  content.foreword,
                  options as unknown as undefined,
                )}
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    ))
  }

  return (
    <>
      <Header pageTitle="" breadCrumbs={[]} />
      <Box component="main">
        <Container maxWidth="lg">{renderContentHomePage()}</Container>
      </Box>
    </>
  )
}

export default Home

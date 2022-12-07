import { Box, Container, Typography } from '@mui/material'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// Layouts
import Header from '@layouts/Header'

// Services
import { getDataContent } from '@services/restClient'

// Types
import { IContentAbout } from '@self-types/ContentAbout.types'

import { options } from '@utils/configOptionsContentful'

export const getStaticProps: GetStaticProps = async () => {
  const response = await getDataContent({
    typeContent: 'author',
  })

  return {
    props: {
      recipes: response,
    },
  }
}

const AboutPage = ({
  recipes,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const contents = recipes.map(
    (item: InferGetStaticPropsType<typeof getStaticProps>) => item.fields,
  )

  const renderContentHomePage = () => {
    return contents.map((content: IContentAbout) => (
      <Box component="main" key={content.name}>
        <Box component="section">
          <Typography
            variant="h5"
            marginBottom="20px"
            fontSize={{
              xs: '16px',
              md: '20px',
            }}
          >
            {content.description}
          </Typography>

          {/* Information Author */}
          <Typography
            variant="h2"
            textTransform="uppercase"
            fontSize={24}
            fontWeight={700}
            marginBottom="40px"
          >
            1. TO {content.name}
          </Typography>
          <Image
            src={content.avatar[0].url}
            alt="avatar"
            width={200}
            height={200}
            loading="eager"
          />
          <Box lineHeight="35px" letterSpacing="0.7px" marginTop={3}>
            {documentToReactComponents(
              content.introduceYourself,
              options as unknown as undefined,
            )}
          </Box>

          {/* Information Blog */}
          <Typography
            variant="h2"
            textTransform="uppercase"
            fontSize={24}
            fontWeight={700}
            marginBottom="40px"
            marginTop={5}
          >
            2. TO {content.blog}
          </Typography>

          <Box lineHeight="35px" letterSpacing="0.7px" marginTop={3}>
            {documentToReactComponents(
              content.introduceBlog,
              options as unknown as undefined,
            )}
          </Box>
        </Box>
      </Box>
    ))
  }

  return (
    <>
      <Header
        pageTitle="About"
        breadCrumbs={[{ link: 'about', href: 'about' }]}
      />
      <Box component="main">
        <Container maxWidth="lg">{renderContentHomePage()}</Container>
      </Box>
    </>
  )
}

export default AboutPage

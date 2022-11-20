import { Box, Container, Typography } from '@mui/material'
import { memo } from 'react'

// Constants
import { DEFAULT_HEADER_URL } from '@constants/router'
import { LOGO_TITLE, NAVIGATE_ITEM } from '@constants/__mock__/mockData'

// Components
import Logo from '@components/Logo'
import Navigation from '@components/Navigation'
import Breadcrumbs, { LinkItem } from '@components/Breadcrumbs'

export interface IHeader {
  pageTitle: string
  breadCrumbs: LinkItem[]
}

const Header = ({ pageTitle = 'Title', breadCrumbs = [] }: IHeader) => {
  return (
    <Box component="header" marginBottom="50px">
      <Box paddingTop="20px" bgcolor="#F5F6FA">
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Logo
            link={DEFAULT_HEADER_URL.HOME.URL}
            marginBottom="20px"
            letterSpacing="2px"
          >
            {LOGO_TITLE}
          </Logo>
          <Navigation navItems={NAVIGATE_ITEM} />
        </Container>
      </Box>
      {breadCrumbs.length > 0 && (
        <Box
          paddingTop="20px"
          bgcolor="#F5F6FA"
          sx={{
            paddingTop: '100px',
          }}
        >
          <Container maxWidth="lg">
            <Breadcrumbs links={breadCrumbs} />
            <Typography
              data-testid="page-title"
              variant="h2"
              letterSpacing="2px"
              fontWeight={800}
              color="#D4D5D9"
              marginTop="40px"
              textTransform="uppercase"
              fontSize="48px"
            >
              {pageTitle}
            </Typography>
          </Container>
        </Box>
      )}
    </Box>
  )
}

export default memo(Header)

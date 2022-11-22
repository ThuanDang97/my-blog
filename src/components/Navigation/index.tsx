import { Box, List, ListItem, SvgIcon, useTheme } from '@mui/material'
import Link from 'next/link'
import { lazy, memo, Suspense, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'

// Components
import Button from '@components/Button'

const Search = lazy(() => import('@components/Search'))

type TNavItem = {
  id: number
  name: string
  path: string
}

export interface INavigation {
  navItems: TNavItem[]
}

const Navigation = ({ navItems }: INavigation) => {
  const theme = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleGetValue = () => {
    console.log(123)
  }

  const handleKeyDown = () => {
    console.log(123)
  }

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        padding="12px 12px 12px 25px"
        width="100%"
        alignItems="center"
        boxShadow={`${theme.palette.grey[400]} 0px 3px 8px`}
        bgcolor={theme.palette.common.white}
      >
        <List
          sx={{
            display: 'flex',
            gap: '30px',
          }}
        >
          {navItems.map((item) => (
            <ListItem
              key={item.id}
              sx={{
                padding: 0,
                fontSize: '18px',
                textTransform: 'uppercase',
                fontWeight: 600,
                letterSpacing: '2px',
                width: 'auto',
                ':hover': {
                  color: theme.palette.grey[500],
                },
              }}
            >
              <Link href={item.path} prefetch={false}>
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>

        {/* Search Button */}
        <Button
          onClick={handleOpen}
          variant="text"
          sx={{
            backgroundColor: 'transparent',
            ':hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <SvgIcon
            sx={{
              color: theme.palette.common.black,
              width: 24,
              height: 24,
              cursor: 'pointer',
              ':hover': {
                color: theme.palette.grey[500],
              },
            }}
          >
            <SearchIcon />
          </SvgIcon>
        </Button>
      </Box>

      {/* Modal Search */}
      <Suspense fallback={<div>loading.....</div>}>
        <Search
          isOpen={isOpen}
          onClose={handleClose}
          onChange={handleGetValue}
          onKeyDown={handleKeyDown}
        />
      </Suspense>
    </>
  )
}

export default memo(Navigation)

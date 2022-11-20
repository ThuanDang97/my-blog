import { memo } from 'react'
import { Breadcrumbs, BreadcrumbsProps, Typography } from '@mui/material'
import Link from 'next/link'

export interface LinkItem {
  link: string
  href: string
}

export interface IBreadcrumbs extends BreadcrumbsProps {
  links: LinkItem[]
}
const BasicBreadcrumbs = ({ links = [], ...props }: IBreadcrumbs) => {
  return (
    <Breadcrumbs {...props}>
      <Typography color="#1A1B1D">
        <Link href="/">HOME</Link>
      </Typography>

      {links.map((item) => (
        <Typography key={item.link} textTransform="uppercase" color="#1A1B1D">
          <Link href={item.href as string}>{item.link}</Link>
        </Typography>
      ))}
    </Breadcrumbs>
  )
}

export default memo(BasicBreadcrumbs)

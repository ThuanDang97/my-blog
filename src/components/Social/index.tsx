import { SvgIcon, useTheme } from '@mui/material'
import Link from 'next/link'
import { memo, ReactNode } from 'react'
import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiMailFill,
  RiTwitterFill,
} from 'react-icons/ri'

const platformIcons: Record<string, ReactNode> = {
  facebook: <RiFacebookFill />,
  instagram: <RiInstagramLine />,
  twitter: <RiTwitterFill />,
  linkedin: <RiLinkedinFill />,
  gmail: <RiMailFill />,
  github: <RiGithubFill />,
}

export type TPlatform = {
  slug: string
  link: string
}
const Social = ({ slug, link }: TPlatform) => {
  const theme = useTheme()

  return (
    <Link href={link} passHref>
      <SvgIcon
        sx={{
          color: theme.palette.common.black,
          width: 18,
          height: 18,
        }}
      >
        {platformIcons[slug]}
      </SvgIcon>
    </Link>
  )
}

export default memo(Social)

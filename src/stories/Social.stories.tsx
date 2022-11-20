import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Types
import theme from '@self-types/Themes.types'

// Components
import Social, { TPlatform } from '@components/Social'

export default {
  title: 'Component/Social',
  component: Social,
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      )
    },
  ],
} as ComponentMeta<typeof Social>

const Template: ComponentStory<typeof Social> = (args) => <Social {...args} />

export const FacebookIcon = Template.bind({})
const facebookIcon: TPlatform = {
  slug: 'facebook',
  link: '#',
}
FacebookIcon.args = facebookIcon

export const TwitterIcon = Template.bind({})
const twitterIcon: TPlatform = {
  slug: 'twitter',
  link: '#',
}
TwitterIcon.args = twitterIcon

export const InstagramIcon = Template.bind({})
const instagramIcon: TPlatform = {
  slug: 'instagram',
  link: '#',
}
InstagramIcon.args = instagramIcon

export const LinkedinIcon = Template.bind({})
const linkedinIcon: TPlatform = {
  slug: 'linkedin',
  link: '#',
}
LinkedinIcon.args = linkedinIcon

export const GmailIcon = Template.bind({})
const gmailIcon: TPlatform = {
  slug: 'gmail',
  link: '#',
}
GmailIcon.args = gmailIcon

export const GithubIcon = Template.bind({})
const githubIcon: TPlatform = {
  slug: 'github',
  link: '#',
}
GithubIcon.args = githubIcon

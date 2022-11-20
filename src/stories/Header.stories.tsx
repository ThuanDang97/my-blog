import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Types
import theme from '@self-types/Themes.types'

// Components
import Header, { IHeader } from '@layouts/Header'

export default {
  title: 'Layouts/Header',
  component: Header,
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
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const HeaderLayout = Template.bind({})
const headerLayout: IHeader = {
  pageTitle: 'blog',
  breadCrumbs: [
    {
      link: 'Blog',
      href: '/blog',
    },
    {
      link: 'LEXICAL ENVIRONMENT TRONG JAVASCRIPT',
      href: '/lexical-environment-trong-javascript',
    },
  ],
}
HeaderLayout.args = headerLayout

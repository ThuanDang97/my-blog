import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Types
import theme from '@self-types/Themes.types'

// Components
import Logo, { ILogo } from '@components/Logo'

export default {
  title: 'Component/Logo',
  component: Logo,
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
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const LogoComponent = Template.bind({})
const logoComponent: ILogo = {
  children: 'beautyoncode',
  link: '/',
}
LogoComponent.args = logoComponent

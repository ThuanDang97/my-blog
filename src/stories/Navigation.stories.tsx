import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Types
import theme from '@self-types/Themes.types'

// Components
import Navigation, { INavigation } from '@components/Navigation'

export default {
  title: 'Component/Navigation',
  component: Navigation,
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
} as ComponentMeta<typeof Navigation>

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args} />
)

export const NavigationComponent = Template.bind({})
const navigationComponent: INavigation = {
  navItems: [
    {
      id: 1,
      name: 'Home',
      path: '/',
    },
    {
      id: 2,
      name: 'Most View',
      path: '/most-view',
    },
    {
      id: 3,
      name: 'Blog',
      path: '/blog',
    },
    {
      id: 4,
      name: 'About',
      path: '/about',
    },
  ],
}
NavigationComponent.args = navigationComponent

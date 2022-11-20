import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Types
import theme from '@self-types/Themes.types'

// Layouts
import PageLayout, { IPageLayout } from '@layouts/PageLayout'

export default {
  title: 'Layouts/PageLayout',
  component: PageLayout,
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
} as ComponentMeta<typeof PageLayout>

const Template: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args} />
)

export const PageLayoutLayout = Template.bind({})
const pageLayoutLayout: IPageLayout = {
  children: '123123',
}
PageLayoutLayout.args = pageLayoutLayout

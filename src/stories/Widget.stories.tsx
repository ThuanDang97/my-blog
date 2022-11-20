import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Types
import theme from '@self-types/Themes.types'
import Widget, { IWidget } from '@components/Widget'

// Components

export default {
  title: 'Component/Widget',
  component: Widget,
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
} as ComponentMeta<typeof Widget>

const Template: ComponentStory<typeof Widget> = (args) => <Widget {...args} />

export const WidgetComponent = Template.bind({})
const widgetComponent: IWidget = {
  title: 'Categories',
  widgetsItem: [
    {
      name: 'Python',
      slug: 'python',
    },
    {
      name: 'JavaScript',
      slug: 'javascript',
    },
    {
      name: 'NextJS',
      slug: 'nextjs',
    },
    {
      name: 'Front-End',
      slug: 'front-end',
    },
    {
      name: 'Linux',
      slug: 'linux',
    },
    {
      name: 'CSS',
      slug: 'css',
    },
  ],
}
WidgetComponent.args = widgetComponent

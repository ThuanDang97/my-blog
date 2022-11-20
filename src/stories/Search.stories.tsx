import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from '@mui/material'

// Types
import theme from '@self-types/Themes.types'

// Components
import Search from '@components/Search'

export default {
  title: 'Component/Search',
  component: Search,
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
} as ComponentMeta<typeof Search>

const Template: ComponentStory<typeof Search> = (args) => (
  <Box>
    Content
    <Search {...args} />
  </Box>
)

export const SearchComponent = Template.bind({})
const searchComponent = {
  isOpen: true,
}
SearchComponent.args = searchComponent

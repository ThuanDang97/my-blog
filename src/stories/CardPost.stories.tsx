import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Document } from '@contentful/rich-text-types'

// Types
import theme from '@self-types/Themes.types'

// Components
import CardPost, { ICardPost } from '@components/CardPost'

export default {
  title: 'Component/CardPost',
  component: CardPost,
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
} as ComponentMeta<typeof CardPost>

const Template: ComponentStory<typeof CardPost> = (args) => (
  <CardPost {...args} />
)

export const CardPostComponent = Template.bind({})
const cardPostComponent: ICardPost = {
  image:
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  alt: 'CSS',
  headerContent: 'CSS',
  view: '300',
  href: '/',
  shortContent: {
    data: {},
    content: [
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value:
              'Chào mừng bạn đến với blog số 5 của series “Linux dành cho lập trình viên”. Trong các blog trước, mình đã đi qua các nội dung về: – “Giới thiệu về Linux” – “Làm quen câu lệnh và hệ thống tập tin…\n',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
    ],
    nodeType: 'document',
  } as unknown as Document,
}
CardPostComponent.args = cardPostComponent

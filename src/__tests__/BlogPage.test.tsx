// Components
import PageBlogList from '@pages/blog/[page]'

// Utils
import { render } from '@utils/testUtils'

// Mocks Data
import { MOCK_DATA_PAGE } from '@constants/__mock__/mockData'

describe('Page Blog', () => {
  test('Page Blog matches DOM Snapshot', () => {
    const { container } = render(<PageBlogList posts={MOCK_DATA_PAGE} />)

    expect(container).toMatchSnapshot()
  })
})

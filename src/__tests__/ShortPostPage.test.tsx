// Components
import ShortPostListPage from '@pages/category/short-posts/[page]'

// Utils
import { render } from '@utils/testUtils'

// Mocks Data
import { MOCK_DATA_PAGE } from '@constants/__mock__/mockData'

describe('Page Short Post', () => {
  test('Page Short Post matches DOM Snapshot', () => {
    const { container } = render(<ShortPostListPage posts={MOCK_DATA_PAGE} />)

    expect(container).toMatchSnapshot()
  })
})

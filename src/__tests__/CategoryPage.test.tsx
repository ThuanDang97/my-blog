// Components
import CategoryPage from '@pages/category/[category]/[page]'
// Utils
import { render } from '@utils/testUtils'

// Mocks Data
import { MOCK_DATA_PAGE } from '@constants/__mock__/mockData'

describe('Page Category', () => {
  test('Page Category matches DOM Snapshot', () => {
    const { container } = render(<CategoryPage posts={MOCK_DATA_PAGE} />)

    expect(container).toMatchSnapshot()
  })
})

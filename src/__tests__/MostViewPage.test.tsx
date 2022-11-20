// Components
import MostViewListPage from '@pages/category/most-views/[page]'

// Utils
import { render } from '@utils/testUtils'

// Mocks Data
import { MOCK_DATA_PAGE } from '@constants/__mock__/mockData'

describe('Page Most View', () => {
  test('Page Most View matches DOM Snapshot', () => {
    const { container } = render(<MostViewListPage posts={MOCK_DATA_PAGE} />)

    expect(container).toMatchSnapshot()
  })
})

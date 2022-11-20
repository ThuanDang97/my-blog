// Components
import ProgrammingListPage from '@pages/category/programming/[page]'

// Utils
import { render } from '@utils/testUtils'

// Mocks Data
import { MOCK_DATA_PAGE } from '@constants/__mock__/mockData'

describe('Page Programming', () => {
  test('Page Programming matches DOM Snapshot', () => {
    const { container } = render(<ProgrammingListPage posts={MOCK_DATA_PAGE} />)

    expect(container).toMatchSnapshot()
  })
})

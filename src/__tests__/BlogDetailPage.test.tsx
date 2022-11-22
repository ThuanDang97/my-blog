// Components
import PostDetail from '@pages/[slug]'

// Utils
import { render } from '@utils/testUtils'

// Mocks Data
import { MOCK_DATA_PAGE } from '@constants/__mock__/mockData'

describe('Page Detail', () => {
  test('Page Detail matches DOM Snapshot', () => {
    const { container } = render(
      <PostDetail
        recipe={MOCK_DATA_PAGE}
        previous={MOCK_DATA_PAGE}
        next={MOCK_DATA_PAGE}
      />,
    )

    expect(container).toMatchSnapshot()
  })
})

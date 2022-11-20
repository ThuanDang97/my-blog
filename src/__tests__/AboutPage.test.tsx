// Components
import AboutPage from '@pages/about'

// Utils
import { render } from '@utils/testUtils'

// Mocks Data
import { MOCK_DATA_ABOUT_PAGE } from '@constants/__mock__/mockData'

describe('Page About', () => {
  test('Page About matches DOM Snapshot', () => {
    const { container } = render(<AboutPage recipes={MOCK_DATA_ABOUT_PAGE} />)

    expect(container).toMatchSnapshot()
  })
})

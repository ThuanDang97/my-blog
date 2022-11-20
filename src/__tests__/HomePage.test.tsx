// Components
import Home from '@pages/index'

// Utils
import { render } from '@utils/testUtils'

// Mocks data
import { MOCK_DATA_HOME_PAGE } from '@constants/__mock__/mockData'

describe('Home Page', () => {
  const props = [MOCK_DATA_HOME_PAGE]

  test('Home Page matches DOM Snapshot', () => {
    const { container } = render(<Home recipes={props} />)

    expect(container).toMatchSnapshot()
  })
})

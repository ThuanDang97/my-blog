// Utils
import { render } from '@utils/testUtils'

// Page
import NotFoundPage from '@pages/404'

describe('Page Not Found', () => {
  test('Page Not Found matches DOM Snapshot', () => {
    const { container } = render(<NotFoundPage />)

    expect(container).toMatchSnapshot()
  })
})

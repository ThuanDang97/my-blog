// Utils
import { render } from '@utils/testUtils'

// Mocks data
import { MOCK_NAVIGATE } from '@constants/__mock__/mockData'

// Components
import Navigation, { INavigation } from '..'

describe('Navigation Component', () => {
  const mockProps: INavigation = MOCK_NAVIGATE

  it('Should show match Navigation DOM Snapshot ', () => {
    const { container } = render(<Navigation {...mockProps} />)

    expect(container).toMatchSnapshot()
  })
})

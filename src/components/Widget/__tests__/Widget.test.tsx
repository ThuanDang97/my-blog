// Utils
import { cleanup, render, screen } from '@utils/testUtils'

// Mocks data
import { MOCK_WIDGET } from '@constants/__mock__/mockData'

// Components
import Widget, { IWidget } from '..'

describe('Widget component', () => {
  afterEach(cleanup)

  const mockProps: IWidget = MOCK_WIDGET

  it('should render Widget component', () => {
    const { container } = render(<Widget {...mockProps} />)

    expect(container).toMatchSnapshot()

    const title = screen.getByTestId('widget-title')
    expect(title).toHaveTextContent('Categories')
  })

  it('should render correct widget item', () => {
    render(<Widget {...mockProps} />)

    const link = screen.getAllByTestId('widget-item')
    const links = screen.getAllByRole('link')

    expect(link[0]).toHaveTextContent('Python')
    expect(links[0].getAttribute('href')).toEqual('/python')
  })
})

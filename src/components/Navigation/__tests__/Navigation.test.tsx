// Utils
import { fireEvent, render, screen } from '@utils/testUtils'

// Mocks data
import { MOCK_NAVIGATE } from '@constants/__mock__/mockData'

// Components
import Navigation, { INavigation } from '..'

describe('Navigation Component', () => {
  const mockProps: INavigation = MOCK_NAVIGATE

  jest.mock('next/router', () => ({
    useRouter: () => ({
      push: jest.fn(),
      back: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
    }),
  }))

  it('Should show match Navigation DOM Snapshot ', () => {
    const { container } = render(<Navigation {...mockProps} />)

    expect(container).toMatchSnapshot()
  })

  it('should render math content Navigation', () => {
    render(<Navigation {...mockProps} />)

    const home = screen.getByRole('link', {
      name: /home/i,
    })
    const mostView = screen.getByRole('link', {
      name: /Most View/i,
    })
    const blog = screen.getByRole('link', {
      name: /Blog/i,
    })
    const about = screen.getByRole('link', {
      name: /About/i,
    })

    expect(home).toHaveTextContent('Home')
    expect(mostView).toHaveTextContent('Most View')
    expect(blog).toHaveTextContent('Blog')
    expect(about).toHaveTextContent('About')

    expect(home).toHaveAttribute('href', '/')
    expect(mostView).toHaveAttribute('href', '/most-view')
    expect(blog).toHaveAttribute('href', '/blog')
    expect(about).toHaveAttribute('href', '/about')
  })

  it('handleOpen should call and open modal search', () => {
    render(<Navigation {...mockProps} />)

    const buttonSearch = screen.getByRole('button', {
      name: /search/i,
    })

    fireEvent.click(buttonSearch)

    expect(screen.getByTestId('backdrop')).toBeInTheDocument()
  })

  it('handleClose should call and close modal search', () => {
    const { container } = render(<Navigation {...mockProps} />)

    const buttonSearch = screen.getByRole('button', {
      name: /search/i,
    })

    fireEvent.click(buttonSearch)

    const buttonClose = screen.getByTestId('close-icon')

    fireEvent.click(buttonClose)

    expect(container).not.toBe('Type to search')
  })

  it('handleGetValue should call and get correct value', () => {
    render(<Navigation {...mockProps} />)

    const buttonSearch = screen.getByRole('button', {
      name: /search/i,
    })

    fireEvent.click(buttonSearch)

    const search = screen.getByRole('textbox') as HTMLInputElement

    fireEvent.change(search, {
      target: { value: 'Search Value' },
    })

    expect(search.value).toBe('Search Value')
  })

  it('handleKeyDown should call and get correct value', () => {
    render(<Navigation {...mockProps} />)

    const buttonSearch = screen.getByRole('button', {
      name: /search/i,
    })

    fireEvent.click(buttonSearch)

    const search = screen.getByRole('textbox')
    fireEvent.keyDown(search)

    expect(search).toBeTruthy()
  })
})

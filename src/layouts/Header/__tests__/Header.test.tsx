import { cleanup, render, screen } from '@utils/testUtils'
import Header, { IHeader } from '..'

describe('Header layouts', () => {
  afterEach(cleanup)

  const mockProps: IHeader = {
    pageTitle: 'blog',
    breadCrumbs: [
      {
        link: 'Blog',
        href: '/blog',
      },
      {
        link: 'LEXICAL ENVIRONMENT TRONG JAVASCRIPT',
        href: '/lexical-environment-trong-javascript',
      },
    ],
  }

  it('should render Header layouts', () => {
    const { container } = render(<Header {...mockProps} />)

    expect(container).toMatchSnapshot()

    const title = screen.getByTestId('page-title')
    expect(title).toHaveTextContent('blog')
  })
})

import { render } from '@utils/testUtils'
import PageLayout, { IPageLayout } from '..'

describe('Page Layouts', () => {
  const mockProps: IPageLayout = {
    children: 'Content',
  }
  it('should render Page layouts', () => {
    const { container } = render(<PageLayout {...mockProps} />)

    expect(container).toMatchSnapshot()
  })
})

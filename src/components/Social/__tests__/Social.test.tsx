import { render } from '@utils/testUtils'
import Social, { TPlatform } from '..'

describe('Social Component', () => {
  const mockProps: TPlatform = {
    slug: 'facebook',
    link: '#',
  }

  it('Should show match Social DOM Snapshot', () => {
    const { container } = render(<Social {...mockProps} />)

    expect(container).toMatchSnapshot()
  })
})

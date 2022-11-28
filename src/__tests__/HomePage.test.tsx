// Components
import Home, { getStaticProps } from '@pages/index'

// Utils
import { render } from '@utils/testUtils'

// Mocks data
import { MOCK_DATA_HOME_PAGE } from '@constants/__mock__/mockData'

jest.mock('@services/restClient', () => ({
  getDataContent: jest.fn(() => {
    return MOCK_DATA_HOME_PAGE
  }),
}))

describe('Home Page', () => {
  const props = [MOCK_DATA_HOME_PAGE]

  test('Home Page matches DOM Snapshot', () => {
    const { container } = render(<Home recipes={props} />)

    expect(container).toMatchSnapshot()
  })

  test('getStaticProps should return props ', async () => {
    const result = await getStaticProps({})

    expect(result).toStrictEqual({
      props: {
        recipes: MOCK_DATA_HOME_PAGE,
      },
    })
  })
})

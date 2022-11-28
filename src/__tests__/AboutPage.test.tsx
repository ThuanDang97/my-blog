// Components
import AboutPage, { getStaticProps } from '@pages/about'

// Utils
import { render } from '@utils/testUtils'

// Mocks Data
import { MOCK_DATA_ABOUT_PAGE } from '@constants/__mock__/mockData'

jest.mock('@services/restClient', () => ({
  getDataContent: jest.fn(() => {
    return MOCK_DATA_ABOUT_PAGE
  }),
}))

describe('Page About', () => {
  test('Page About matches DOM Snapshot', () => {
    const { container } = render(<AboutPage recipes={MOCK_DATA_ABOUT_PAGE} />)

    expect(container).toMatchSnapshot()
  })

  test('getStaticProps should return props ', async () => {
    const result = await getStaticProps({})

    expect(result).toStrictEqual({
      props: {
        recipes: MOCK_DATA_ABOUT_PAGE,
      },
    })
  })
})

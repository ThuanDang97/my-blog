// Components
import PageBlogList, {
  getStaticPaths,
  getStaticProps,
} from '@pages/blog/[page]'

// Utils
import { fireEvent, render, screen } from '@utils/testUtils'

// Mocks Data
import { MOCK_DATA_PAGE } from '@constants/__mock__/mockData'

jest.mock('@services/restClient', () => ({
  getDataContent: jest.fn(() => {
    return MOCK_DATA_PAGE
  }),
}))

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
  }),
}))

describe('Page Blog', () => {
  test('Page Blog matches DOM Snapshot', () => {
    const { container } = render(<PageBlogList posts={MOCK_DATA_PAGE} />)

    expect(container).toMatchSnapshot()
  })

  test('getStaticPropsPaths should return props', async () => {
    const result = await getStaticPaths({})

    expect(result).toStrictEqual({
      paths: [{ params: { page: `${MOCK_DATA_PAGE.length - 1}` } }],
      fallback: false,
    })
  })

  test('getStaticProps should return props ', async () => {
    const result = await getStaticProps({})

    expect(result).toStrictEqual({
      props: {
        posts: MOCK_DATA_PAGE,
      },
      revalidate: 60,
    })
  })

  test('should router math path after click button', () => {
    render(<PageBlogList posts={MOCK_DATA_PAGE} />)

    const olderButton = screen.getByRole('button', {
      name: /Older posts/i,
    })

    const newerButton = screen.getByRole('button', {
      name: /Newer posts/i,
    })

    fireEvent.click(olderButton)
    fireEvent.click(newerButton)

    expect(olderButton).toBeTruthy()
    expect(newerButton).toBeTruthy()
  })
})

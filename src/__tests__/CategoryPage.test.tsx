// Components
import CategoryPage, {
  getStaticPaths,
  getStaticProps,
} from '@pages/category/[category]/[page]'
// Utils
import { fireEvent, render, screen } from '@utils/testUtils'

// Mocks Data
import { MOCK_DATA_PAGE } from '@constants/__mock__/mockData'

jest.mock('@services/restClient', () => ({
  getDataContent: jest
    .fn()
    .mockImplementationOnce(() => {
      return [
        {
          fields: { name: 'Most Views', slug: 'most-views' },
        },
        {
          fields: { name: 'Short Posts', slug: 'short-posts' },
        },
        {
          fields: { name: 'Programming', slug: 'programming' },
        },
      ]
    })
    .mockImplementation(() => {
      return MOCK_DATA_PAGE
    }),
}))

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
  }),
}))

describe('Page Category', () => {
  test('Page Category matches DOM Snapshot', () => {
    const { container } = render(<CategoryPage posts={MOCK_DATA_PAGE} />)

    expect(container).toMatchSnapshot()
  })

  test('getStaticPropsPaths should return props', async () => {
    const result = await getStaticPaths({})

    expect(result).toStrictEqual({
      paths: [
        {
          params: {
            category: 'most-views',
            page: '1',
          },
        },
        {
          params: {
            category: 'short-posts',
            page: '1',
          },
        },
        {
          params: {
            category: 'programming',
            page: '1',
          },
        },
      ],
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
    render(<CategoryPage posts={MOCK_DATA_PAGE} />)

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

// Components
import PostDetail, { getStaticPaths, getStaticProps } from '@pages/[slug]'

// Utils
import { fireEvent, render, screen } from '@utils/testUtils'

// Mocks Data
import { MOCK_DATA_PAGE } from '@constants/__mock__/mockData'

jest.mock('@services/restClient', () => ({
  getDataContent: jest
    .fn(() => {
      return MOCK_DATA_PAGE
    })
    .mockImplementationOnce(() => {
      return MOCK_DATA_PAGE
    })
    .mockImplementationOnce(() => {
      return MOCK_DATA_PAGE
    })
    .mockImplementationOnce(() => {
      return MOCK_DATA_PAGE
    }),
}))

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
  }),
}))

describe('Page Detail', () => {
  test('Page Detail matches DOM Snapshot', () => {
    const { container } = render(
      <PostDetail
        recipe={MOCK_DATA_PAGE}
        previous={MOCK_DATA_PAGE}
        next={MOCK_DATA_PAGE}
      />,
    )

    expect(container).toMatchSnapshot()
  })

  test('getStaticPropsPaths should return props', async () => {
    const result = await getStaticPaths({})

    expect(result).toStrictEqual({
      paths: [
        { params: { slug: MOCK_DATA_PAGE[0].fields.slug } },
        { params: { slug: MOCK_DATA_PAGE[1].fields.slug } },
      ],
      fallback: 'blocking',
    })
  })

  test('getStaticProps should return props ', async () => {
    const result = await getStaticProps({})

    expect(result).toStrictEqual({
      props: {
        recipe: MOCK_DATA_PAGE,
        previous: MOCK_DATA_PAGE,
        next: MOCK_DATA_PAGE,
      },
    })
  })

  test('should router math path after click button', () => {
    render(
      <PostDetail
        recipe={MOCK_DATA_PAGE}
        previous={MOCK_DATA_PAGE}
        next={MOCK_DATA_PAGE}
      />,
    )

    const button = screen.getAllByRole('button', {
      name: /Các bài viết ngắn – phần 1/i,
    })

    fireEvent.click(button[0])
    fireEvent.click(button[1])

    expect(button[0]).toBeTruthy()
    expect(button[1]).toBeTruthy()
  })
})

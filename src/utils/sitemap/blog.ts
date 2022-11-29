// Constants
import { BASE_URL, ITEM_PER_PAGE } from '@constants/index'

// Services
import { getDataContent } from '@services/restClient'

export const blogPath = async () => {
  const response = await getDataContent({
    typeContent: 'blogPost',
    query: { 'fields.categories': 'blog' },
  })

  const totalPage = Math.ceil(response.length / ITEM_PER_PAGE)

  const paths = Array.from(
    {
      length: totalPage,
    },
    (_, i) => {
      return {
        params: {
          page: (i + 1).toString(),
        },
      }
    },
  )

  return paths.map((staticPagePath) => {
    return `${BASE_URL}/${staticPagePath.params.page}`
  })
}

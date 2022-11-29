// Constants
import { BASE_URL, ITEM_PER_PAGE } from '@constants/index'

// Services
import { getDataContent } from '@services/restClient'

export const categoryPath = async () => {
  const responseCategory = await getDataContent({
    typeContent: 'category',
  })

  const pathsName = await Promise.all(
    responseCategory.map(async (item) => {
      const { slug } = item.fields as { slug: string }

      const slugUrl = slug === 'most-views' ? 'blog' : slug

      // Get data by category
      const categoryItem = await getDataContent({
        typeContent: 'blogPost',
        query: {
          'fields.categories': `${slugUrl}`,
        },
      })

      // Calculator total Page
      const totalPage = Math.ceil(categoryItem.length / ITEM_PER_PAGE)

      return Array.from(
        {
          length: totalPage,
        },
        (_, i) => {
          return {
            params: {
              category: slug,
              page: (i + 1).toString(),
            },
          }
        },
      )
    }),
  )

  const allCategoryPaths = pathsName.flat()

  return allCategoryPaths.map((staticPagePath) => {
    return `${BASE_URL}/${staticPagePath.params.category}/${staticPagePath.params.page}`
  })
}

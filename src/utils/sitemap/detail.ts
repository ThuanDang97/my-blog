// Constants
import { BASE_URL } from '@constants/index'

// Services
import { getDataContent } from '@services/restClient'

export const detailPath = async () => {
  const response = await getDataContent({
    typeContent: 'blogPost',
  })

  const paths = response.map((path) => {
    const url = path.fields as unknown as { slug: string }

    return {
      params: {
        slug: url.slug,
      },
    }
  })

  return paths.map((staticPagePath) => {
    return `${BASE_URL}/${staticPagePath.params.slug}`
  })
}

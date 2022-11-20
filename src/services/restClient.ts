import { createClient } from 'contentful'

export type TGetDataContent = {
  typeContent: string
  views?: number
  skipValue?: number
  limitResults?: number
  order?: string
  query?: object
}
export const getDataContent = async ({
  typeContent,
  skipValue = 0,
  limitResults,
  order = 'sys.createdAt',
  query = {},
}: TGetDataContent) => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
  })

  const res = await client.getEntries({
    content_type: typeContent,
    order,
    skip: skipValue,
    limit: limitResults,
    ...query,
  })

  return res.items
}

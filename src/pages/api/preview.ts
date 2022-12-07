/* eslint-disable consistent-return */
import { getDataContent } from '@services/restClient'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { secret, slug } = req.query

  if (secret !== process.env.NEXT_PUBLIC_CONTENTFUL_SECRET_KEY || !slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // // Fetch the headless CMS to check if the provided `slug` exists
  const response = await getDataContent({
    typeContent: 'blogPost',
    query: { 'fields.slug[in]': `${slug}` },
    preview: true,
  })

  // // If the slug doesn't exist prevent preview mode from being enabled
  if (!response) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  res.redirect(`/${slug}`)

  // const url = `http://localhost:3000/${slug}`

  // res.setHeader('Content-Type', 'text/html')
  // res.write(
  //   `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
  //   <script>window.location.href = '${url}'</script>
  //   </head>
  //   </html>`,
  // )
  // res.end()
}

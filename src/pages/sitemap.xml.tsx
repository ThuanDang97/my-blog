import { NextApiResponse } from 'next'

// Utils
import { aboutPath } from '@utils/sitemap/about'
import { categoryPath } from '@utils/sitemap/category'
import { blogPath } from '@utils/sitemap/blog'
import { homePath } from '@utils/sitemap/home'
import { detailPath } from '@utils/sitemap/detail'

const Sitemap = () => {
  return null
}

const aboutpath = aboutPath()
const homepath = homePath()

export const getServerSideProps = async ({ res }: { res: NextApiResponse }) => {
  const categorypath = await categoryPath()
  const blogpath = await blogPath()
  const detailpath = await detailPath()

  // spreading staticPaths and categoryPaths into allPaths array
  const allPaths = [
    aboutpath,
    homepath,
    ...categorypath,
    ...blogpath,
    ...detailpath,
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${allPaths
       .map((url) => {
         return `
           <url>
             <loc>${url}</loc>
             <lastmod>${new Date().toISOString()}</lastmod>
             <changefreq>monthly</changefreq>
             <priority>1.0</priority>
           </url>
         `
       })
       .join('')}
   </urlset>
 `

  res.setHeader('Content-Type', 'Text/xml')
  res.write(sitemap)
  res.end()
  return {
    props: {},
  }
}
export default Sitemap

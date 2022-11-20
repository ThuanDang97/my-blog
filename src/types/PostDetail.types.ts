import { Document } from '@contentful/rich-text-types'

export interface IPostDetail {
  slug: string
  title: string
  heroImage: { fields: { file: { url: string } } }
  content: Document
}

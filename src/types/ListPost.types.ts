import { Document } from '@contentful/rich-text-types'

export interface IListPost {
  heroImage: {
    fields: {
      file: {
        url: string
      }
      title: string
    }
  }
  title: string
  description: Document
  view: string
  slug: string
}

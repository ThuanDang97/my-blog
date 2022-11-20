import { Document } from '@contentful/rich-text-types'

export interface IContentAbout {
  avatar: {
    fields: {
      file: {
        url: string
      }
    }
  }
  blog: string
  description: string
  name: string
  introduceBlog: Document
  introduceYourself: Document
}

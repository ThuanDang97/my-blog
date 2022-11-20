import { Document } from '@contentful/rich-text-types'

export interface IContentHome {
  author: string
  image: {
    fields: {
      file: {
        url: string
      }
    }
  }
  foreword: Document
}

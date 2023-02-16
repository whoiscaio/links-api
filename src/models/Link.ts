import { model, Schema } from 'mongoose'

export const Link = model('Link', new Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
}))
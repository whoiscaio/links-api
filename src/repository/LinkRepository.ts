import { Link as LinkSchema } from '../models/Link'
import Link from '../types/Link'

let links: Link[] = []

class LinkRepository {
  async getAll() {
    const links = await LinkSchema.find({})

    return links
  }

  async create(newLink: Link) {
    await LinkSchema.create(newLink)

    return newLink
  }

  async update(updatedLink: Link, linkId: string) {
    const { url, title } = updatedLink

    const link = await LinkSchema.findByIdAndUpdate(linkId, updatedLink, { new: true })

    return link
  }

  async delete(linkId: string) {
    const link = await LinkSchema.findByIdAndDelete(linkId)

    return link
  }
}

export function changeLinks(newLinks: Link[]) {
  async function addLink(link: Link) {
    await LinkSchema.create(link)
  }

  newLinks.forEach((newLink) => addLink(newLink))
}

export default new LinkRepository()
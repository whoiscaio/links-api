import { Request, Response } from 'express'
import { v4 } from 'uuid'
import getDevGoData from '../functions/getDevGoData'

import LinkRepository from '../repository/LinkRepository'

class LinkController {
  async getAll(request: Request, response: Response) {
    const links = await LinkRepository.getAll()

    response.json(links)
  }

  async create(request: Request, response: Response) {
    const { url, title } = request.body

    const newLink = {
      url, 
      title
    }

    const link = await LinkRepository.create(newLink)

    response.status(201).json(link)
  }

  async update(request: Request, response: Response) {
    const updatedLink = request.body
    const { linkId } = request.params

    const link = await LinkRepository.update(updatedLink, linkId)

    response.json(link)
  }

  async delete(request: Request, response: Response) {
    const { linkId } = request.params

    const link = await LinkRepository.delete(linkId)

    response.status(200).json(link)
  }

  async scrap(request: Request, response: Response) {
    await getDevGoData()

    response.status(200).json({
      message: 'scrap from devGo successful'
    })
  }
}

export default new LinkController()
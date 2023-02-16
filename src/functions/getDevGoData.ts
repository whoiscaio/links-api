import axios from 'axios'
import { load } from 'cheerio'
import { v4 } from 'uuid'
import { changeLinks } from '../repository/LinkRepository'
import textConvert from './textConvert'

export default async function getDevGoData() {
  const response = await axios.get('https://devgo.com.br/')

  const $ = load(response.data)

  const val = $('.blog-articles-area .blog-article-card .blog-article-card-title a').map((i, element) => ({
    url: element.attribs.href,
    title: textConvert(element.attribs.href.split('/')[3]),
    id: v4()
  }))

  changeLinks([ ...val ])
}
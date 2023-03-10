import { Request, Response, Router } from 'express'
import LinkController from './controllers/LinkController'

const router = Router()

router.get('/', (request: Request, response: Response) => {
  response.status(200).json({
    message: 'server up'
  })
})

router.get('/links', LinkController.getAll)
router.post('/links', LinkController.create)
router.put('/links/:linkId', LinkController.update)
router.delete('/links/:linkId', LinkController.delete)

router.get('/scrap', LinkController.scrap)

export default router
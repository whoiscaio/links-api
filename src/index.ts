import express from 'express'
import mongoose from 'mongoose'
import router from './routes'
import cors from 'cors'

const port = 80
const mongodb_port = 27017

mongoose.set('strictQuery', true)

mongoose.connect(`mongodb://localhost:${mongodb_port}`)
  .then(() => {
    const app = express()

    app.use(cors({
      origin: 'http://localhost:3000'
    }))
    app.use(express.json())
    app.use(router)
    
    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`)
    })
  })
  .catch(() => console.log('connection error'))

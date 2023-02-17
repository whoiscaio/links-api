import express from 'express'
import mongoose from 'mongoose'
import router from './routes'
import cors from 'cors'

const port = 8080
const mongodb_port = 27017

mongoose.set('strictQuery', true)

mongoose.connect(`mongodb://ec2-54-233-244-136.sa-east-1.compute.amazonaws.com:${mongodb_port}`)
  .then(() => {
    const app = express()

    app.use(cors({
      origin: '*'
    }))
    app.use(express.json())
    app.use(router)
    
    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`)
    })
  })
  .catch(() => console.log('connection error'))

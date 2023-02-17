import express from 'express'
import mongoose from 'mongoose'
import router from './routes'
import cors from 'cors'

const port = 8080
const mongodb_port = 27017

mongoose.set('strictQuery', true)

mongoose.connect(`mongodb+srv://root:root@cluster0.rw55knl.mongodb.net/?retryWrites=true&w=majority`)
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
  .catch((err) => console.log('connection error', err))

import express from 'express'
import storage from 'node-persist'

const app = express()

app.use(express.json())
storage.init()

export default {
  path: '/api',
  handler: app
}

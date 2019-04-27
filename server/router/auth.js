import express from 'express'
import Debug from 'debug'

const auth = express.Router()
const debug = Debug('server:auth')

auth.post('/', (req, res) => {
  debug(req.body)
})

export default auth

import express from 'express'
import database from './database/connection.js'
import users from './controller/users.js'
import photos from './controller/photos.js'
import auth from './middleware/authentication.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use( express.urlencoded({
  extended: false
}))
app.use(cookieParser())
app.use(express.json())
app.use('/api/users/', users)
app.use('/api/photos/', photos)

app.get('/checkAuth', auth, async (req, res) => {
  res.json(req.authData)
})

app.listen(3001)
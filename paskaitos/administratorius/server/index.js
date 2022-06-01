import express from 'express'
import database from './database/connection.js'
import users from './controller/users.js'
import auth from './middleware/authentication.js'
import userService from './service/users.js'
import cookieParser from 'cookie-parser'

const app = express()
 
app.use( express.urlencoded({
  extended: false
}))
app.use(cookieParser())
app.use(express.json())
app.use('/api/users/', users)

app.get('/checkAuth', auth, async (req, res) => {
  const userData = await userService.getUser(req.authData.id)
  if(userData) {
    req.authData.role = userData.role
  }
  res.json(req.authData)
})

app.listen(3001)
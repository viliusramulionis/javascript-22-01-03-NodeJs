import express from 'express'
import database from './database/connection.js'
import users from './controller/users.js'
import profile from './controller/profile.js'

const app = express()
 
app.use( express.urlencoded({
  extended: false
}))

app.use(express.json())

app.use('/api/users/', users)
app.use('/api/profiles/', profile)

app.listen(3001)
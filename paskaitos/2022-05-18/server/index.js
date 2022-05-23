import express from 'express'
import database from './database/connection.js'
import users from './controller/users.js'

const app = express()
 
app.use( express.urlencoded({
  extended: false
}))

app.use(express.json())

app.use('/api', users)

app.listen(3001)
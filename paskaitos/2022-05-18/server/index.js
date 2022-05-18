import express from 'express'
import database from './database/connection.js'

const app = express()
 
app.use( express.urlencoded({
  extended: false
}))

app.use(express.json())

//app.use('/api', tasks)

app.listen(3001)
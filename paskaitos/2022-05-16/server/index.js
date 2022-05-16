import express from 'express'
import tasks from './controller/tasks.js'

const app = express()

//POST metodu perduodamu duomenu  
app.use( express.urlencoded({
  extended: false
}))

//Perduodamu duomenu body lygmenyje json formatu issifravimas
app.use(express.json())

app.use('/api', tasks)

app.listen(3001)
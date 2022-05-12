//MVC - 
//Model - Sekcija atsakinga uz duomenu ir administravima
//View - Grazintas html kodas
//Controller - Routerio administratorius
import express from 'express'
import {create} from 'express-handlebars'
import tasks from './controller/tasks.js'

const app = express()
const hbs = create()

//Handlebars variklio prijungimas
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', './templates')

//Statiniu failu perdavimas adrese /assets i narsykle is folderio assets
app.use('/assets', express.static('assets'))

//POST metodu perduodamu duomenu  
app.use( express.urlencoded({
  extended: false
}))

//Perduodamu duomenu body lygmenyje json formatu issifravimas
app.use(express.json())

app.use('/', tasks)

app.listen(3000)

//Iraso pridejimas
// await insert({task: 'Isplauti indus', done: 0})

// //Iraso istrynimas
// try {
//     await _delete(1)
// } catch {
//     console.log('Istrinti nepavyko')
// }

// //Iraso atnaujinimas
// try {
//     await update(5, {task: 'Isvesti suni', done: 1})
// } catch {
//     console.log('Nepavyko atnaujinti iraso')
// }
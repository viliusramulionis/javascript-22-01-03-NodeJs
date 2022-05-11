//MVC - 
//Model - Sekcija atsakinga uz duomenu ir administravima
//View - Grazintas html kodas
//Controller - Routerio administratorius
import express from 'express'
import {create} from 'express-handlebars'
import {insert, getAll, _delete, update} from './services/tasks.js'

const app = express()
const hbs = create()

//Handlebars variklio prijungimas
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', './templates')

//POST metodu perduodamu duomenu  
app.use( express.urlencoded({
  extended: false
}))

app.get('/', async(req, res) => {
    const entries = await getAll()
    res.render('tasks', {tasks: entries})
})

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
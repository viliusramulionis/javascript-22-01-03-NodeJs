import express from 'express'
import {dirname} from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs/promises'
import { create } from 'express-handlebars'
import session from 'express-session'

//Express objekto inicijavimas
const app = express()
//Handlebars variklio sukurimas
const hbs = create({ /* config */ });
//Esamos direktorijos susigrazinimas
const __dirname = dirname(fileURLToPath(import.meta.url))
//Hardkodinti prisijungimo duomenys
const credentials = {
  login: 'vilius@bit.lt',
  password: '1234'
}
//Bazinio adreso konstravimas
const port = 3000
const url  = 'http://localhost:' + port

//Handlebars variklio prijungimas
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', './templates')

//POST metodu perduodamu duomenu  
app.use( express.urlencoded({
  extended: false
}))

//Sesijos prijungimas ir konfiguracija
app.use( session({
  secret: 'authentification',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 86400000 //Laikas kiek galioja issaugotas sausainelis (cookie)
  }
}))

app.use('/assets', express.static('assets'))

app.get('/', (req, res) => {
  if(req.session.loggedin != undefined && req.session.loggedin) {
    res.redirect(url + '/clients')
    return
  } 

  res.render('login')
})

app.post('/login-submit', (req, res) => {
  // req.query - tai kas yra perduodama adrese uz zenklo ?
  // req.params - tai kas yra perduodama uz kiekvieno slasho
  // req.body - tai kas yra perduodama post metodu
  // req.session - tai kas yra issaugota sausaineliuose

  if(parseInt( Object.keys(req.body).length ) > 0) {
    if(
      req.body.username != '' &&
      req.body.password != '' &&
      req.body.username === credentials.login &&
      req.body.password === credentials.password
    ) {
      req.session.loggedin = true
      res.redirect(url + '/clients')
    } else {
      res.send('Neteisingi prisijungimo duomenys')
    }

  } else {
    res.redirect(url) //Peradresavimas
  }

})

app.get('/clients', (req, res) => {
  if(req.session.loggedin != undefined && req.session.loggedin) {
    res.render('clients')
  } else {
    res.redirect(url)
  }
})

//Sukuria serveri priskiriant jam routerius
app.listen(port)
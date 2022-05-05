import express from 'express'
import { create } from 'express-handlebars'
import session from 'express-session'

//Helper import
import {port} from './utils/helper.js'

//Controllers import
import login from './controllers/login.js'
import clients from './controllers/clients.js'

//Express objekto inicijavimas
const app = express()
//Handlebars variklio sukurimas
const hbs = create({ /* config */ });

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

//Statiniu failu padavimo i narsykle konfiguracine eilute
app.use('/assets', express.static('assets'))

//Login routerio priskyrimas
app.use('/', login)
//Clients routerio priskyrimas
app.use('/', clients)

//Sukuria serveri priskiriant jam routerius
app.listen(port)
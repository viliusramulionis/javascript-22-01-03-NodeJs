import express from 'express'
import {url} from '../utils/helper.js'

const Router = express.Router()

//Hardkodinti prisijungimo duomenys
const credentials = {
    login: 'vilius@bit.lt',
    password: '1234'
}

Router.get('/', (req, res) => {
    if(req.session.loggedin != undefined && req.session.loggedin) {
      res.redirect(url + '/clients')
      return
    } 
  
    res.render('login')
})

Router.post('/login-submit', (req, res) => {

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

export default Router
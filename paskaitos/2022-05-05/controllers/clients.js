import express from 'express'
import fs from 'fs/promises'
import { url } from '../utils/helper.js'
import auth from '../auth/auth.js'

const Router = express.Router()

//Autentifikacijos reikalavimo priskyrimas
Router.use(auth)

Router.get('/clients', async (req, res) => {

    let parsedJson = false
    let message = ''

    try {
        const data = await fs.readFile('./database.json', 'utf8')

        parsedJson = JSON.parse(data)

    } catch {
        message = 'Nera issaugota jokiu klientu'
    }

    res.render('clients', { parsedJson, message })
})

Router.get('/new-client', (req, res) => {
    res.render('newclient')
})

Router.post('/client-submit', async (req, res) => {

    if (parseInt(Object.keys(req.body).length) > 0) {

        let json = []

        try {
            const data = await fs.readFile('./database.json', 'utf8')

            let parsedJson = JSON.parse(data)

            parsedJson.push(req.body)

            json = parsedJson

        } catch {
            json.push(req.body)

            console.log('Duomenu bazes failas sukurtas')
        }

        //Informacijos issaugojimas faile

        await fs.writeFile('./database.json', JSON.stringify(json))

        res.redirect(url + '/clients')

    } else {
        res.send('Negauti duomenys')
    }
})

//Kliento istrynimas delete metodu

Router.delete('/delete-client/:id', async (req, res) => {
    const id = req.params.id

    if (!id) {
        res.json({ status: 'failed', message: 'Neperduotas joks id' })
        return
    }

    try {

        const data = await fs.readFile('./database.json', 'utf8')

        let parsedJson = JSON.parse(data)

        parsedJson.splice(id, 1)

        //Informacijos issaugojimas faile

        await fs.writeFile('./database.json', JSON.stringify(parsedJson))

        res.json({ status: 'ok', message: 'Įrašas sėkmingai ištrintas' })

    } catch {
        res.json({ status: 'failed', message: 'Nepavyko perskaityti duomenu bazes failo' })
    }

})

export default Router
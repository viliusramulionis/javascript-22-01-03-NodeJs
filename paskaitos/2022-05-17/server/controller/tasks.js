import express from 'express'
import {insert, getAll, _delete, update} from '../services/tasks.js'

const Router = express.Router()

Router.get('/', async(req, res) => {
    let {entries, message} = false

    try {
        entries = await getAll()
        res.json({status: 'success', message: entries})
    } catch {
        message = 'Duomenu gauti nepavyko'
        res.json({status: 'danger', message})
    }

})

Router.put('/task/done/:id', async (req, res) => {
    const id = req.params.id
    const done = req.body.done.toString()

    try {
        await update(id, {done}, true)
        res.json({status: 'success', message: 'Užduoties statusas sėkmingai pakeistas'})
    } catch {
        res.json({status: 'danger', message: 'Nepavyko atnaujinti įrašo'})
    }
})

Router.put('/task/update/:id', async(req, res) => {
    const id = req.params.id
    const task = req.body.task

    try {
        await update(id, {task})
        res.json({status: 'success', message: 'Užduotis sėkmingai atnaujinta'})
    } catch {
        res.json({status: 'danger', message: 'Nepavyko atnaujinti užduoties'})
    }
})

Router.delete('/task/delete/:id', async(req, res) => {
    const id = req.params.id

    try {
        await _delete(id)
        res.json({status: 'success', message: 'Užduotis sėkmingai ištrinta'})
    } catch {
        res.json({status: 'danger', message: 'Nepavyko ištrinti užduoties'})
    }
})

Router.post('/add-task', async(req, res) => {
    try {
        await insert(req.body)
        res.json({status: 'success', message: 'Užduotis sėkmingai patalpinta'})
    } catch {
        res.json({status: 'danger', message: 'Nepavyko patalpinti užduoties'})
    }
})

export default Router
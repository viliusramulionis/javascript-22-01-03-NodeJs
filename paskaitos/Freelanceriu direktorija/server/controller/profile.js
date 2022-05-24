import express from 'express'
import Joi from 'joi'
import bcrypt from 'bcrypt'
import validator from '../middleware/validator.js'
import {exists, insert, getAll} from '../service/profile.js'

const Router = express.Router()

const profileSchema = (req, res, next) => {
    const schema = Joi.object({
        headline: Joi.string(),
        subheadline: Joi.string(),
        description: Joi.string(),
        hourly_rate: Joi.number().required(),
        location: Joi.string(),
        UserId: Joi.number().required()
    })

    validator(req, next, schema)
}

Router.get('/', async (req, res) => {
    const profiles = await getAll()

    if(profiles) {
        res.json({message: profiles, status: 'success'})
    } else {
        res.json({message: 'Įvyko klaida', status: 'danger'})
    }
})

Router.post('/create', profileSchema,  async (req, res) => {
    
    if(await exists({
        UserId: req.body.UserId
    })) {
        res.json({status: 'danger', message: 'Profilis šiam vartotojui jau yra sukurtas'})
        return
    } 

    if(await insert(req.body)) {
        res.json({status: 'success', message: 'Profilis sėkmingai sukurtas'})
    } else {
        res.json({status: 'danger', message: 'Įvyko klaida'})
    }
})

export default Router
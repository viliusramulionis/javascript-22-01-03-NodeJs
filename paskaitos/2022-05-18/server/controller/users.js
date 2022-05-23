import express from 'express'
import Joi from 'joi'
import validator from '../middleware/validator.js'
import {exists, insert} from '../service/users.js'

const Router = express.Router()

const registerSchema = (req, res, next) => {
    const schema = Joi.object({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required()
    })

    validator(req, next, schema)
}

Router.post('/users/register', registerSchema,  async (req, res) => {
    
    if(await exists({
        email: req.body.email
    })) {
        res.json({status: 'danger', message: 'Toks vartotojas jau egzistuoja'})
        return
    } 
    
    await insert(req.body)
    res.json({status: 'success', message: 'Varototojas sėkmingai sukurtas'})
})

export default Router
import express, { response } from 'express'
import Joi from 'joi'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import validator from '../middleware/validator.js'
import users from '../service/users.js'
import { loadJsonFile } from 'load-json-file'

const Router = express.Router()
const config = await loadJsonFile('./config.json')

Router.get('/all', async (req, res) => {
    const data = await users.getAllOrderedUsers() 
    res.json(data)
})

const registerSchema = (req, res, next) => {
    const schema = Joi.object({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required()
    })

    validator(req, next, schema)
}

Router.post('/register', registerSchema,  async (req, res) => {
    
    if(await users.exists({
        email: req.body.email
    })) {
        res.json({status: 'danger', message: 'Toks vartotojas jau egzistuoja'})
        return
    } 
    
    req.body.password = await bcrypt.hash(req.body.password, 10)

    if(await users.insert(req.body)) {
        res.json({status: 'success', message: 'Varototojas sėkmingai sukurtas'})
    } else {
        res.json({status: 'danger', message: 'Įvyko klaida'})
    }
})

const loginSchema = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
    })

    validator(req, next, schema)
}

Router.post('/login', loginSchema, async (req, res) => {
    const user = await users.getUserByEmail(req.body.email)

    if (!user) {
        res.json({ message: 'Nepavyko rasti tokio vartotojo', status: 'danger' })
        return
    }
    
    if (!await bcrypt.compare(req.body.password, user.password)) {
        res.json({ message: 'Neteisingas slaptažodis', status: 'danger' })
        return
    }

    const data = {email: req.body.email, id: user.id}
    const token = jsonwebtoken.sign(data, config.secret, {
        expiresIn: '1h'
    })

    res.cookie('token', token)
    res.json({message: {
        userId: user.id,
    }, status: 'success'})
})

export default Router
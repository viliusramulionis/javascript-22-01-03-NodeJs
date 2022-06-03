import mysql from 'mysql2/promise'
import { loadJsonFile } from 'load-json-file'
import { Sequelize } from 'sequelize'
import { users } from '../model/users.js'
import { photos } from '../model/photos.js'

const config = await loadJsonFile('./config.json')

const {host, port, user, password, db} = config.database

export const database = {}

try {
    const connection = await mysql.createConnection({ host, port, user, password })
    await connection.query('CREATE DATABASE IF NOT EXISTS `' + db + '`;')
    connection.end()
    
    const sequelize = new Sequelize(db, user, password, { dialect: 'mysql' })
    
    database.Users = users(sequelize)
    database.Photos = photos(sequelize)
    
    await sequelize.sync({alter: true})
} catch {
    console.log('Nepavyko prisijungti prie duomenu bazės')
}

export default config
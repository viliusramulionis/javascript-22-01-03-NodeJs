import database from './config.js'
import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
    host: database.database_host,
    user: database.user,
    database: database.database
})

export default connection
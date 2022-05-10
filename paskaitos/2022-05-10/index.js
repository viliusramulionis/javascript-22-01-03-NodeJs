import database from './helpers/config.js'
//Mysql2 modulio importavimas su promisais
import mysql from 'mysql2/promise'
//Mysql2 modulio importavimas su callback funkciju naudojimu
//import mysql from 'mysql2'

const connection = await mysql.createConnection({
    host: database.database_host,
    user: database.user,
    database: database.database
})

//Visu duomenu paemimas is lenteles

const select = await connection.query("SELECT * FROM clients")
console.log(select[0])

//Nauju duomenu pridejimas naujantis promisais
const insert = await connection.query("INSERT INTO clients (company_name) VALUES('UAB Maxima')")
const lastInsertId = insert[0].insertId

//Duomenu atnaujinimas
// Atvirkscias slash'as (\) sukuria tokiu paciu kabuciu kaip ir js sintakseje naudojimo galimybe 
// Panaudojant escape funkcionaluma
const update = await connection.query("UPDATE clients SET company_name = 'UAB \"RIMI\"' WHERE id = " + lastInsertId)

//Duomenu istrynimas
//Klaustukas reiskia, jog toje pozicijoje turetu buti idedamas kintamasis is antro parametro perduoto i query metoda
//Kintamuju galima perduoti ne viena, taciau jei ju yra daugiau jie turi buti perduodami masyve
const remove = await connection.query("DELETE FROM clients WHERE id = ?", lastInsertId)

//Duomenu pridejimas i duomenu baze naudojantis callback funkciju variantu
// connection.query("INSERT INTO clients (company_name) VALUES('UAB Maxima')", (err, result) => {
//     console.log('Ivykdyta')
//     if(!err)
//         console.log('Kompanija issaugota')
// })

// connection.query('SELECT * FROM clients WHERE id > 1', (err, results, fields) => {
//     if(err) {
//         console.log(err)
//         return
//     }

//     console.log(results)
//     //console.log(fields)
// })

//console.log(database)
import fs from 'fs/promises'
import {readFile} from 'fs'

//Relative paths
// ./test/test.txt
//Absolute paths
// C:\User\Desktop\etc\etc\hello.txt

//Filesystem callbacks
// readFile('./hello.txt', 'utf8', (err, data) => {
//     console.log(data)
// }) 

//Filesystem promises 

//Failo atidarymas su fileHandle
// const fileHandle = await fs.open('./database.json', 'r')
// //Failo perskaitymas ir turinio grazinimas
// const hello = await fileHandle.readFile({encoding: 'utf-8'})

let json = '[]'

try {
    const hello = await fs.readFile('./database.json', 'utf8')

    //console.log(hello)

    //Grazinto stringo konvertavimas i objekta ir duomenu pridejimas

    json = JSON.parse(hello)

    json[0].test = 'Test'

    json = JSON.stringify(json)

} catch {
    console.log('Duomenu bazes failas sukurtas')
}

//Informacijos issaugojimas faile

await fs.writeFile('./database.json', json)

//Pakartotinis failo perskaitymas

let savedData = await fs.readFile('./database.json', 'utf8')

//console.log(JSON.parse(savedData))

try {
    await fs.access('./modules')
    console.log('Direktorija egzistuoja')
} catch {
    console.log('Direktorijos rasti nepavyko, taciau ja sukureme')
    await fs.mkdir('./modules')
}
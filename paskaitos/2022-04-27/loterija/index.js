import fs from 'fs/promises'
import {readFile} from 'fs'

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const loterija = async () => {

    const names = ['Egle', 'Vidas', 'Giedrius', 'Juste', 'Dominyka', 'Aleksandras', 'Virgis', 'Deimante', 'Deividas', 'Giedre']

    try {
        await fs.access('./database.json')
    } catch {
        await fs.writeFile('./database.json', JSON.stringify(names))
    }

    const fileNames = await fs.readFile('./database.json', 'utf8')

    let fileNamesObject = JSON.parse(fileNames)
    let winner = random(0, 9)
    let stats = fileNamesObject[fileNamesObject.length - 1]

    if(stats != undefined && stats.hasOwnProperty('winners')) {

        if(stats.winners.hasOwnProperty(winner)) {

            if(stats.winners[winner] < 2) {

                fileNamesObject[fileNamesObject.length - 1].winners[winner]++
                console.log('Loteriją antrą kartą laimėjo: ' + fileNamesObject[winner])
            }
        } else {
            fileNamesObject[fileNamesObject.length - 1].winners[winner] = 1
            console.log('Loterijos etapą laimėjo: ' + fileNamesObject[winner])
        }

    } else {
        
        fileNamesObject.push({
            winners: {
                [winner] : 1
            }
        })
        console.log('Loterijos etapą laimėjo: ' + fileNamesObject[winner])
    }

    let jsonString = JSON.stringify(fileNamesObject)
    stats = fileNamesObject[fileNamesObject.length - 1]

    await fs.writeFile('./database.json', jsonString)

    let result = true

    if(Object.keys(stats.winners).length >= 10) {
        result = Object.keys(stats.winners).find(key => stats.winners[key] < 2)
    }

    if(result)
        setTimeout(loterija, 200)  
 
}

loterija()

// try {
//     const fileNames = await fs.readFile('./database.json', 'utf8')

//     let fileNamesObject = JSON.parse(fileNames)
//     let winner = random(0, 9)

//     if(fileNamesObject.winners[winner]) {
//         console.log('Pridesime')
//     } else {
//         fileNamesObject.push({
//             winners: {
//                 [winner] : 0
//             }
//         })
//     }

//     let jsonString = JSON.stringify(fileNamesObject)

//     console.log(jsonString)

// } catch {
//     console.log('Duomenu bazes failas sukurtas')
// }







// let json = '[]'

// try {
//     const hello = await fs.readFile('./database.json', 'utf8')

//     //console.log(hello)

//     //Grazinto stringo konvertavimas i objekta ir duomenu pridejimas

//     json = JSON.parse(hello)

//     json[0].test = 'Test'

//     json = JSON.stringify(json)

// } catch {
//     console.log('Duomenu bazes failas sukurtas')
// }

// //Informacijos issaugojimas faile

// await fs.writeFile('./database.json', json)

// //Pakartotinis failo perskaitymas

// let savedData = await fs.readFile('./database.json', 'utf8')

// //console.log(JSON.parse(savedData))

// try {
//     await fs.access('./modules')
//     console.log('Direktorija egzistuoja')
// } catch {
//     console.log('Direktorijos rasti nepavyko, taciau ja sukureme')
//     await fs.mkdir('./modules')
// }
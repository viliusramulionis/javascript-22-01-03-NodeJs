import readline from 'readline'
import chalk from 'chalk';

//Duomenų priėmimo ir grąžinimo konsolėje interfeiso konfigūracija
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Vardo perdavimas ir grąžinimas
// rl.question('Įveskite savo vardą:', vardas => {
//     console.log('Jūsų vardas yra: ' + vardas)
//     rl.close()
// })

//Dauginimas
// rl.question('Įveskite skaičių nuo vieno iki dešimt:', digit => {

//     if(digit > 0 && digit <= 10) {

//         let resp = ''

//         for(let i = 1; i <= 10; i++ ) {
//             resp += digit + ' x ' + i + '\t=\t' + (digit * i) + '\n'
//         }

//         console.log(resp)

//     } else {
//         console.log('Įvestas neteisingas skaičius')
//     }

//     rl.close()
// })

// rl.question('Įveskite savo vardą: ', vardas => {

//     rl.question('Įveskite pavardę: ', (pavarde) => {
//         console.log('Jūsų vardas ir pavardė yra: \n' + vardas + '\t' + pavarde)
//         rl.close()
//     })

// })

//Uzduoties sprendimas
rl.question('Įveskite skaičių nuo kiek kilogramų pradėsime konvertavimą: ', nuo => {

    rl.question('Įveskite skaičių kiek rezultatų turėtų būti lentelėje: ', iki => {
        const pound = 2.20462
        const stone = 0.157473
        let rezultatas = `${chalk.bgCyan.bold('kg.')}\t${chalk.bgCyan.bold('pounds')}\t${chalk.bgCyan.bold('stones')}\n`

        for(let i = nuo; i <= iki; i++) {
            let p = (i * pound).toFixed(2)
            let s = (i * stone).toFixed(2)

            rezultatas += `${chalk.blue(i)}\t${chalk.green(p)}\t${chalk.red(s)}\n`
        }

        console.log(rezultatas)

        rl.close()
    })
})

//Production enviroment - Kodas kuris yra paruostas vartojimui
//Developmental enviroment - Kodas kuris yra gaminamas arba testuojamas
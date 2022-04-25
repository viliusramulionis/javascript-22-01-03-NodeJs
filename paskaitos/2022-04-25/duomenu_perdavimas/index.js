import readline from 'readline'

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
rl.question('Įveskite skaičių nuo vieno iki dešimt:', digit => {

    if(digit > 0 && digit <= 10) {

        let resp = ''

        for(let i = 1; i <= 10; i++ ) {
            resp += digit + ' x ' + i + '\t=\t' + (digit * i) + '\n'
        }

        console.log(resp)

    } else {
        console.log('Įvestas neteisingas skaičius')
    }
    
    rl.close()
})

// rl.question('Įveskite savo vardą: ', vardas => {

//     rl.question('Įveskite pavardę: ', (pavarde) => {
//         console.log('Jūsų vardas ir pavardė yra: \n' + vardas + '\t' + pavarde)
//         rl.close()
//     })

// })

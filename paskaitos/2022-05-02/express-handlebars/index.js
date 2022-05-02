import express from 'express'
import {dirname} from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs/promises'
import { create } from 'express-handlebars';

//Express objekto inicijavimas
const app = express()
const hbs = create({ /* config */ });
const __dirname = dirname(fileURLToPath(import.meta.url))

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', './templates')

app.get('/', (req, res) => {
    let name = '<h1>Antanas</h1>'
    //res.sendFile(__dirname + '/templates/forma.html')
    res.render('forma', {name, indeksas: 12})
})

app.get('/loop', (req, res) => {
    let variables = {
      vardas: 'Julijus',
      pavarde: 'Cezaris',
      skaiciai: [20, 15, 100, 999999],
      yra: 'Eilute yra',
      nera: false,
      objektas: {
        tipas: 'Automobilis',
        metai: 1990,
        ta: '2023-12-01'
      }
    }
    res.render('loop', variables)
})

app.get('/client-submit', async (req, res) => {
    if(parseInt( Object.keys(req.query).length ) > 0) {

      let json = []

      try {
          const data = await fs.readFile('./database.json', 'utf8')

          let parsedJson = JSON.parse(data)

          parsedJson.push(req.query)

          json = parsedJson
      
      } catch {
          json.push(req.query)

          console.log('Duomenu bazes failas sukurtas')
      }
      
      //Informacijos issaugojimas faile
      
      await fs.writeFile('./database.json', JSON.stringify(json))

      res.send('Duomenys sėkmingai priimti')
    } else {
      res.send('Nėra gauta jokių duomenų')
    }
})

app.get('/clients', async (req, res) => {
  const data = await fs.readFile('./database.json', 'utf8')

  let masyvas = JSON.parse(data)
  let html = `<table>
              <thead>
                <th>Vardas</th>
                <th>Pavardė</th>
                <th>Adresas</th>
                <th>Telefonas</th>
                <th>El. paštas</th>
              </thead> 
              <tbody>           
              `
  
    masyvas.forEach(value => {
      html +=  `<tr>
                  <td>${value.vardas}</td>
                  <td>${value.pavarde}</td>
                  <td>${value.adresas}</td>
                  <td>${value.telefonas}</td>
                  <td>${value.elpastas}</td>
                </tr>`
    })

  html += '</tbody></table>'

  res.send(html)
})

//Sukuria serveri priskiriant jam routerius
app.listen(3000)
import express from 'express'

//Express objekto inicijavimas
const app = express()

//Routeris
app.get('/', function (req, res) {
  res.send('Titulinis')
})

app.get('/home', function (req, res) {
    res.send('Namai')
})

app.get('/pirkti/:perduodamas', function (req, res) {
    console.log(req.params)
    res.send('<h1>Apie Mus</h1>')
})

//Metodai kuriuos naudosime siame kurse
//.get()
//.post()
//.delete()
//.put()

//Sukuria serveri priskiriant jam routerius
app.listen(3000)
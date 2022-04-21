import Helper from '../utils/Helper.js'

class Book {
    static kiekis = 0
    static perskaitytos_knygos = new Map()
    
    constructor() {
        this.id = Helper.random(0, 9999999)
        this.pavadinimas = Helper.string( Helper.random(40, 60) )
        this.aprasymas = Helper.string( Helper.random(40, 150) )
        this.puslapiai = Helper.random(10, 200)
        this.perskaityta = false

        Book.kiekis += this.puslapiai
    }

    static getCount() {
        return Book.kiekis
    } 

    read() {
        this.perskaityta = true
        Book.perskaitytos_knygos.set(this.id, this)
    }
}

export default Book
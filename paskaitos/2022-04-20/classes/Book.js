import Helper from '../utils/Helper.js'

class Book {
    constructor() {
        this.id = Helper.random(0, 9999999)
        this.pavadinimas = Helper.string( Helper.random(40, 60) )
        this.aprasymas = Helper.string( Helper.random(40, 150) )
        this.puslapiai = Helper.random(10, 200)
        this.perskaityta = false
    }

    read() {
        this.perskaityta = true
    }
}

export default Book
import Book from './Book.js'

class BookList {
    constructor(size) {
        this.list = []
        this.current = 0

        this.populate(size)
    }

    populate(length) { //Sugeneruojamas sarasas pasinaudojant Book klase
        this.list = [...Array(length).keys()].map( () => new Book() )
    }

    //Pazymime knyga kaip perskaityta
    markRead() {
        this.current += 1

        if((this.list.length + 1) > this.current) {
            let book = this.list[this.current - 1]
            book.read()
            console.log(this.current)
            return `Sekanti skaitoma knyga yra ${book.pavadinimas}`
        } 

        return 'Visos knygos perskaitytos'
    }

    //Isfiltruojame knygas pagal puslapiu dydi
    filterPages() {
        return this.list.sort((a, b) => a.puslapiai - b.puslapiai)
    }

    //Istriname knyga su didziausiu puslapiu kiekiu
    deleteBook() {
        const list = this.filterPages()

        list.splice(list.length - 1, 1)

        return 'Irasas sekmingai istrintas'
    }

}

export default BookList
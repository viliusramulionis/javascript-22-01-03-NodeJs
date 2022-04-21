import BookList from './classes/BookList.js'
import Book from './classes/Book.js'

const bookList = new BookList(10)

// new Book()

// console.log(Book.getCount())

// //Perskaiciau
console.log(bookList.markRead())
console.log(bookList.markRead())

// //Isfiltruota pagal puslapiu kieki
// //console.log(bookList.filterPages())

// //Istriname daugiau puslapiu kieki turincia knyga
console.log(bookList.deleteBook())
console.log(bookList.deleteBook())
console.log(bookList.deleteBook())

// console.log(bookList.list.length)

//Map

// const map = new Map()

// map.set('indeksas', 10) //Priskiriamas elementas su reiksme 10

// console.log(map.get('indeksas')) // Grazinama 10

// console.log(map.size) //Grazinamas objekto ilgis

// console.log(map.delete('indeksas'))

//console.log(Book.perskaitytos_knygos)

if(bookList.checkRead(bookList.list[5].id)) {
    console.log('Knyga yra perskaityta')
} else {
    console.log('Knyga yra neperskaityta')
}

//console.log(bookList.list.length)

//console.log(BookList.bookCount())

bookList.fillGaps(10)

console.log(bookList.list)

console.log(BookList.bookCount())


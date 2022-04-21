import Cat from './classes/Cat.js'
import BookList from './classes/BookList.js'

//Kates rezultatai
// const gyvunelis = new Cat(5)

// console.log('Nuovargis', gyvunelis.sleep(3))
// console.log('Alkis', gyvunelis.feed(3))
// console.log('Laime vienatve', gyvunelis.pet(2, 5))
// gyvunelis.status()

const bookList = new BookList(10)

//console.log(bookList)

// bookList.list[0].read()

// console.log(bookList.list[0])

//Perskaiciau
console.log(bookList.markRead())

//Isfiltruota pagal puslapiu kieki
console.log(bookList.filterPages())

//Istriname daugiau puslapiu kieki turincia knyga
console.log(bookList.deleteBook())

console.log(bookList.list.length)






import countries from './assets/countries.json' assert { type: 'json' }
import books from './assets/books.json' assert { type: 'json' }
import fs from 'node:fs'

for (const country of countries) {
  const countryBooks = books.find((list) => list.id === country.id).books
  country.books = countryBooks
}

fs.writeFile('./test.json', JSON.stringify(countries), () => {})

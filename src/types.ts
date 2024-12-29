export type Book = {
  id: string
  title: string
  author: string
  read: string
  [k: string]: number | string
}

export type Country = {
  id: string
  title: string
  path: string
  books: Book[]
}

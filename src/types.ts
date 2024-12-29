export type Book = {
  id: number
  title: string
  author: string
  read: string
  [k: string]: number | string
}

export type Country = {
  id: string
  display: boolean
  title: string
  path: string
  books: Book[]
}

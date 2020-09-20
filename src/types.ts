export interface Item {
  memo: string
  url: string
  _id: string
}

export interface Record {
  date: string
  items: Item[]
  wasUpdated: boolean
  id: string
}

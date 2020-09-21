export interface WordUnits {
  word:string
  translation:string
}


export interface SectionItem {
  title:string
  url:string
  wordUnits:WordUnits
}

export interface Section {
  date:string
  items:SectionItem[]
  id:string
}


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

export interface WordUnit {
  word: string;
  translation: string;
}

export interface SectionItem {
  title: string;
  url: string;
  wordUnits: WordUnit[];
}

export interface Section {
  date: string;
  items: SectionItem[];
  id?: string;
}

export interface RecordItem {
  memo: string;
  url: string;
  _id?: string;
}

export interface Record {
  date: string;
  items: RecordItem[];
  id?: string;
}

export interface QAUnit {
  date: string;
  type: string;
  question: string;
  answer: string;
}

export interface UserToken {
  // token: string;
  username: string;
}

export interface DataStatus {
  sections: boolean;
  QAUnits: boolean;
  records: boolean;
}

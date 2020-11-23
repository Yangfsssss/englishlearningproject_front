import axios from "axios";
// import sha256 from 'sha256'
// import md5 from 'md5'

import { Section, Record, QAUnit } from "../types";

const baseUrl = "https://mjlrb.sse.codesandbox.io/api";

const getSections = async () => {
  let res = await axios.get<Section[]>(`${baseUrl}/sections`);
  return res;
};

const getRecords = async () => {
  let res = await axios.get<Record[]>(`${baseUrl}/dailylearningstuff`);
  return res;
};

const getQAUnits = async () => {
  let res = await axios.get<QAUnit[]>(`${baseUrl}/basic`);
  return res;
};

// const saveWord = async (id, newSection) => {
//   const res = await axios.put(`${baseUrl}/${id}`, newSection);
//   return res.data;
// };

const saveSection = async (newSection: Section) => {
  const res = await axios.post<Section>(`${baseUrl}/sections`, newSection);
  return res;
};

const saveRecord = async (newRecord: Record) => {
  const res = await axios.post<Record>(
    `${baseUrl}/dailylearningstuff`,
    newRecord
  );
  return res;
};

const saveQAUnit = async (newQAUnit: QAUnit) => {
  const res = await axios.post<QAUnit>(`${baseUrl}/basic`, newQAUnit);
  return res;
};

const deleteItem = async (id: string) => {
  const res: string = await axios.delete(`${baseUrl}/dailylearningstuff/${id}`);
  return res;
};

// const translate = async (word) => {
//   const appKey = '2ae98dad1ea5ce47'
//   const key = 'gdpW1t1NFPsubJirI7QyyNwdnVljVD30'
//   const salt = new Date().getTime()
//   const curTime = Math.round(new Date().getTime() / 1000)
//   const query = word
//   const from = 'auto'
//   const to = 'auto'
//   const str1 = appKey + query + salt + curTime + key
//   console.log(str1)
//   const sign = sha256(str1)
//   // https://openapi.youdao.com/api?
//   // q=good&
//   // from=auto&
//   // to=auto&
//   // appKey=0b8802eb86c06476&
//   // salt=4
//   // &sign=c917e71231ba8cb8b4db3bb33097be31
//   // sign=a3aac7934e4cf1a452b4193e4d96873d
//   // 2ae98dad1ea5ce47add15939541302091593954130gdpW1t1NFPsubJirI7QyyNwdnVljVD30
//   // 2ae98dad1ea5ce47add15939541722741593954172gdpW1t1NFPsubJirI7QyyNwdnVljVD30
//   const wordObject = {
//     q: query,
//     appKey,
//     salt,
//     from,
//     to,
//     sign,
//     signType: 'v3',
//     curTime,
//   }

//   const res = await axios({
//     method: 'post',
//     dataType: 'jsonp',
//     url: 'https://cors-anywhere.herokuapp.com/https://openapi.youdao.com/api',
//     data: wordObject,
//   })

//   return res
// }

export default {
  getSections,
  getRecords,
  getQAUnits,
  // saveWord,
  saveSection,
  saveRecord,
  saveQAUnit,
  deleteItem
};

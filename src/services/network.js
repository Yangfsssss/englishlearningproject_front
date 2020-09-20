import axios from 'axios'
// import sha256 from 'sha256'
// import md5 from 'md5'

const baseUrl = 'http://localhost:3001/api'

const getSections = async () => {
  let res = await axios.get(`${baseUrl}/sections`)
  return res.data
}

const getRecords = async () => {
  let res = await axios.get(`${baseUrl}/dailylearningstuff`)
  return res.data
}

const saveWord = async (id, newSection) => {
  const res = await axios.put(`${baseUrl}/${id}`, newSection)
  return res.data
}

const saveSection = async (newSection) => {
  const res = await axios.post(`${baseUrl}/sections`, newSection)
  return res.data
}

const saveRecord = async (newRecord) => {
  const res = await axios.post(`${baseUrl}/dailylearningstuff`, newRecord)
  return res.data
}

const deleteItem = async (id) => {
  const res = await axios.delete(`${baseUrl}/dailylearningstuff/5f661d10ff9136005b900476`)
  return res.data
}

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

export default { getSections, getRecords, saveWord, saveSection, saveRecord, deleteItem }

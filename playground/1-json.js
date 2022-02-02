const fs = require('fs');
// const book = {
//     title: 'old man and sea',
//     author: 'Ernest Heminquey'
// }
// const bookJson = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJson)
// const dataBuffer=  fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const fileJSON  = fs.readFileSync('1-json.json')
const dataJson = fileJSON.toString()
const data = JSON.parse(dataJson)

data.name = 'Alex'
data.age = 24
const dataJsonNew  =JSON.stringify(data)
fs.writeFileSync('1-json.json', dataJsonNew)


// console.log(fileJSON)
const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookjson = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookjson)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)

// console.log(data.title)

const data = JSON.parse(fs.readFileSync('1-json.json').toString())
data.name = 'Alvin'
data.age = 18

const fix = JSON.stringify(data)
fs.writeFileSync('1-json.json',fix)

const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (error) => {
//   if (error) {
//     throw error
//   }
//
//   console.log('Папка создана')
// })
// -------------------------
 const filePath = path.join(__dirname, 'test', 'text.txt')
//
// fs.writeFile(filePath, 'Hello NodeJS', err => {
//   if (err) {
//     throw err
//   }
//
//   console.log('Файл создан')
// })
// -------------------------
fs.readFile(filePath, 'utf-8',(err, content) => {
  if (err) {
    throw err
  }

  // const data = Buffer.from(content);
  //
  // console.log('Content: ' + data.toString())
  console.log('Content: ' + content)
})

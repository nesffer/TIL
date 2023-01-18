// @ts-check

const fs = require('fs')

fs.readFile('package.json', 'utf-8', (error, data) => {
  console.log(data)
})

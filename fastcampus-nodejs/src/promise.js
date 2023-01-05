// @ts-check

const fs = require('fs')

/**
 * @param {string} filename
 */
function readFileInPromise(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (error, data) => {
      if (error) {
        reject(error)
      }
      resolve(data)
    })
  })
}

// readFileInPromise('package.json')
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => {
//     console.error(error.message)
//   })

fs.promises
  .readFile('package.json', 'utf-8')
  .then((data) => {
    console.log(data.toString())
  })
  .catch((error) => {
    console.error(error)
  })

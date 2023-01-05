// @ts-check

const http = require('http')

/**
 * GET /posts
 * GET /posts/:id
 * POST /posts
 */
const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.statusCode = 200
    res.end('OK0')
  } else if (req.url === '/posts' && req.method === 'GET') {
    res.statusCode = 200
    res.end('OK1')
  } else if (/^\/posts\/\w+$/.test(req.url || '') && req.method === 'GET') {
    res.statusCode = 200
    res.end('OK2')
  } else if (req.url === '/posts' && req.method === 'POST') {
    res.statusCode = 200
    res.end('OK3')
  } else {
    res.statusCode = 404
    res.end('Not found.')
  }
})

const PORT = 4000

server.listen(PORT, () => {
  console.log(`The server is listening at port: ${PORT}`)
})

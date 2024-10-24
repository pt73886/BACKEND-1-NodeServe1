// const http = require('http')
// const fs = require('fs')
// const { isUtf8 } = require('buffer')
// const server = http.createServer((req,res) => {
//     const data = fs.readFileSync('text1.txt', {encoding: 'utf8'})
//     // console.log(data)
//     res.end('Node.js is intersting, Pankaj')
// })

// server.listen(4000, () =>{
//     console.log('server run on 4000')
// })


// # fs: (File system)
// // readFileSync()
// const http = require('http')
// const fs = require('fs')
// const { isUtf8 } = require('buffer')
// const server = http.createServer((req,res) => {
//     const data = fs.readFileSync('text2.txt', {encoding: 'utf8'}) // convert buffer data type into string data type
//     // console.log(data)
//     res.end('Node.js is intersting, Pankaj')
// })

// server.listen(4000, () =>{
//     console.log('server run on 4000')
// })

// writeFileSync()
// const http = require('http')
// const fs = require('fs')
// const server = http.createServer((req,res) => {
//      fs.writeFileSync('text2.txt', 'HTML') // convert buffer data type into string data type
//     // console.log(data)
//     res.end('Java Script')
// })

// server.listen(4000, () =>{
//     console.log('server run on 4000')
// })

// update the file content

// const http = require('http')
// const fs = require('fs')
// const server = http.createServer((req,res) => {
   
//     res.end('Backend :)')
// })

// server.listen(3000, () =>{
//     console.log('server run on 3000')
// })

/* Import the calulation file methods/ or file */

// const http = require('http')
// const  {sum, diff, mul} = require('./Modules/calculation.js')


/*---- By using ES6 Syntax---------- */

// import http from 'http'
// import {sum, diff, mul} from './Modules/calculation.js'

// const server =http.createServer((req, res) => {
//     console.log(sum(2,3))
//     console.log(diff(10,3))
//     console.log(mul(5,3))
//     res.end('BACKEND :)')
// })
// server.listen(3000, () =>{
//     console.log('Server run on 3000!')
// })



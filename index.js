// const http = require('http')
// const readline = require('readline')
// const rl = readline.createInterface({
//    input: process.stdin, // Readble stream
//    output: process.stdout // writable stream
// })

// const server = http.createServer((req,res) => {
//     if(req.url == '/favicon.ico'){
//         return res.end()
//     }
    // console.log(process.stdin)
    // rl.question('Please Enter your name: ', (name) => {
    //     console.log(`your name is : ${name}`)
    //     rl.close() // close the Interface 
    // })
    // rl.question('Please Enter your name: ', (name) => {
    //     rl.question('Please Enter your age: ', (age) => {
    //         if(age >= 18){
    //             console.log(`Hi ${name} You are eligible for vote!`)
    //         } else {
    //             console.log(`Hi ${name} You are note eligible for vote!`)
    //         }
    //     })
    // })
//     res.end('Server')
// })

// server.listen(4000, () => {
//     console.log('Server run on 4000')
// })

/* # Path Module
  - Relative Path
  - Absolute Path


*/

const http = require('http')
const path = require('path')

const server = http.createServer((req,res) => {
    if(req.url == '/favicon.ico'){
        return res.end()
    }
    // console.log(__dirname)
    // console.log(__filename)
    // console.log(path.extname(__filename)) // .js
    // console.log(path.extname(__dirname))// empty string
    // console.log(path.parse(__filename))// 
    // console.log(path.join('/ParentsF', 'ChildF', 'text.txt')) 
    // console.log(path.join('/ParentsF', '/ChildF', '/text.txt')) 
    console.log(path.resolve('ParentsF', 'ChildF', 'text.txt')) // return a absolute path
    console.log(path.resolve('/ParentsF', 'ChildF', 'text.txt')) 
    console.log(path.resolve('/ParentsF', '/ChildF', 'text.txt')) 

    res.end('Server')
})
 server.listen(4000)

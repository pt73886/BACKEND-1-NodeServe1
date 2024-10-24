/*
 # fs: File System
 - Read to a file

 const http = require('http')
 const fs = require('fs')
 const server = http.createServer((req, res) => {
 const data = fs.readFileSync('text1.txt', {encoding: 'utf8'})
     res.end(data)
 })
 
 server.listen(5000, () => {
     console.log('Server run on 5000')
 })
*/

/*
 # fs: File System
 - Write to a file
 const http = require('http')
 const fs = require('fs')
 const server = http.createServer((req, res) => {
    if(req.url == '/favicon.ico'){
        return res.end()
    }
    fs.writeFileSync('text2.txt', 'JAVASCRIPT')
    res.end('Write a content to a file')
 })
 
 server.listen(5000, () => {
    console.log('Server run on 5000')
 })

 */

/*
 # fs: File System
 - Update to a file (append data to a file)
 
 const http = require('http')
 const fs = require('fs')
 
 const server = http.createServer((req,res) => {
     if(req.url == '/favicon.ico'){
         return res.end()
     }
     fs.appendFileSync('text1.txt', ',css, Javascript,Nodejs')
     res.end('Content appended to a file')
 })
  server.listen(5000, () => {
     console.log('Server run on 5000')
  })

 */

/*
  # Delete a file
  - unlinkSync(): delete a file
  -path: path to the file along with filename and extension

  const http = require('http')
  const fs = require('fs')
  
  const server = http.createServer((req,res) => {
      if(req.url == '/favicon.ico'){
          return res.end()
      }
      fs.unlinkSync('text1.txt')
      res.end('delete a file')
  })
   server.listen(5000, () => {
      console.log('Server run on 5000')
   })

*/

/* # Asynchronous 
  - readFile():
  - path:
  - callback(error, data):

  const http = require('http')
  const fs = require('fs')
  
  const server = http.createServer((req,res) => {
      if(req.url == '/favicon.ico'){
          return res.end()
      }
      fs.readFile('text1.txt', ((error, data) => {
          if(error){
              console.log('some error occures', error)
          } else{
              console.log(data.toString())
          }
      }))
      res.end('File is being read asyncronously')
  })
   server.listen(5000, () => {
      console.log('Server run on 5000')
   })

 */

/* # Write to a file Asynchronously  

const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {
 if(req.url == '/favicon.ico'){
     return res.end()
 }
 fs.writeFile('text1.txt','Node.js is an intresting :)', ((error) => {
     if(error){
         console.log('some error occures', error)
     } else{
         console.log('Data written successfully!')
     }
 }))
 res.end('File is being write asyncronously')
})
server.listen(5000, () => {
 console.log('Server run on 5000')
})

*/

/* # UPDATE A FILE ASYNCHRONOUSLY (Append)

const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {
    if(req.url == '/favicon.ico'){
        return res.end()
    }
    fs.appendFile('text1.txt', '\nJAVASCRIPT,\n Node.js', ((error) => {
        if(error){
            console.log('some error occures', error)
        } else{
            console.log('Appended the data successfully!')
        }
    }))
    res.end('File is appended asyncronously')
})
 server.listen(5000, () => {
    console.log('Server run on 5000')
 })

*/

/* # DELETE A FILE ASYNCHRONOUSLY (UNSKINK THE FILE)

const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {
    if(req.url == '/favicon.ico'){
        return res.end()
    }
    fs.unlink('text2.txt', ((error) => {
        if(error){
            console.log('some error occures', error)
        } else{
            console.log('Delete a file successfully!')
        }
    }))
    res.end('File is deleted asyncronously')
})
 server.listen(5000, () => {
    console.log('Server run on 5000')
 })

*/










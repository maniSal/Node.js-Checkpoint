//create a server  : 
const { response } = require('express')
const http = require('http')
const fs = require("fs")

// 
fs.writeFile('welcome.txt','Hello Node',(err) => {
    err ? 
    console.error('Error...',err)
    : console.log('Donee !')
})
//

fs.readFile('welcome.txt','utf-8',(err,data)=>{
    err? console.log('Error',err) : 
    console.log(data)
})

const password = require('./password-generator')
console.log(password)

http.createServer((request,response) => {
    response.end('<h1>Hello Node!!!!</h1>\n');
}).listen(3000)
// console.log("Hello World");
let a = 10;
let b = 20;
//console.log(a + b);
import fs from 'fs';
// fs.writeFileSync('first.txt','This is my first file.');
// console.log("File Created Successfully");
import os from 'os';
// console.log(os.platform());

import http from "http";
// const server = http.createServer((req, res)=>{
//     res.end("Hello World!!");

// }).listen(3000);
// console.log("Sever started at 3000")

const server1 = http.createServer((req, res) =>{
    res.end("Hello world!!!!!!!!!!!");
}).listen(5000);
console.log("Server started at 5000")

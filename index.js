const http = require("http")
const fs = require("fs")
const path = require("path")

const server = http.createServer((request,response) => {
    if(request.method === "GET"){

        response.writeHead(200, {"Content-Type": "text/html"})

        if(request.url = "/"){
            fs.readFile(path.join(__dirname,"templates", "index.html"),"utf-8",(err,content) => {
                if(err) throw Error()
                response.end(content)
            })
        }
        else if(request.url = "/about"){
            fs.readFile(path.join(__dirname,"templates","about.html"),"utf-8", (err,content) => {
                if(err) throw Error()
                response.end(content)
            })
        }
        else if(request.url = "/contact"){
            fs.readFile(path.join(__dirname,"templates","contact.html"),"utf-8",(err,content) => {
                if(err) throw Error()
                response.end(content)
            })
        }

    }
    else if (request.method === "POST"){
        const name = []
        response.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"})

        request.on("data",data => {
            name.push(Buffer.from(data))
        })

        request.on("end",() =>{
            const message = name.toString().split("=")[1]


            response.end(`Name successfully added: ${message} `)
        })

    }
})

server.listen(3000, () =>{
    console.log("Server has been started on port:3000");
})
const http = require("http")

const server = http.createServer((request,response) => {
    if(request.method === "GET"){

        response.writeHead(200, {"Content-Type": "text/html"})

        response.end(`
        <h2>Send Name</h2>
        <form method="post" action="/">
            <input name="name"  placeholder="Enter your name" />
            <button type="submit">Send Name</button>
        </form>
        `)
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
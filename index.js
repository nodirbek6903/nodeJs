const http = require("http")

const server = http.createServer((request,response) => {
    // request bu serverga so'rov
    // response bu serverdan javob
    console.log(request.url);

    response.write("<h1>Hello Nodirbek Umarov 2</h1>")
    response.write("<h1>Hello Nodirbek Umarov 4</h1>")
    response.write("<h1>Hello Nodirbek Umarov 7</h1>")
    response.end()
})

server.listen(3000, () =>{
    console.log("Server has been started on port:3000");
})
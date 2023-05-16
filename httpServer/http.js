const http = require("http");

const createServer = http.createServer((request, response ) => {
    // console.log(request.url);
    if(request.url == "/"){
        response.end("heloo I am Home ");
    }else if(request.url == "/about"){
        response.end("heloo I am About ");
    }else if(request.url == "/contact"){
        response.end("heloo I am Contact ");
    }else{
        response.writeHead(404, {"content-type": "text/html"});
        response.end( "<H1> page does not exit </H1>")
    }   
})




createServer.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no 8000, ")
})











//  Create API using http 
const http = require("http");
const fs = require("fs");

const createServer = http.createServer((request, response) => {
if(request.url == "/"){
  response.end("I am Home Page");
}else if(request.url == "/about"){
 response.end("I am About Page ")
}else if(request.url == "/contact"){
    response.end("I am Contact Us ")
}else{
    fs.readFile("../userApi/CReateApi.json" , "utf-8", (err, data) => {
        console.log(data)
        // response.end(data); // data show on localhost:8000
    });
    response.end("I am from api side ")
}

});


createServer.listen( 8000, "127.0.0.1", () => {
    console.log(" i am listing please vist on browser => localhost:8000 ")
})
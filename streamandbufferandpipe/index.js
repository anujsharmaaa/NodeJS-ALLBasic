const fs =  require("fs");
const http = require("http");

const anuj_server = http.createServer();


anuj_server.on("request", (request, response) => {

// first wave for streaming
//     fs.readFile("mytext.txt", (err, data) =>{
//         if (err) return console.error(err);
//         response.end(data.toString())
//     })
// })

// second way for streaming
// Advantage => Reading from a stream 
// create a readable stream  
// handle stream events => data , end , and error 
// const readstream = fs.createReadStream("mytext.txt");

// readstream.on("data", (alldataread)  => {
//     response.write(alldataread)
// })
// readstream.on("end", () => {
//     response.end();
// });
// readstream.on("error", (err) => {
//     console.log(err);
//     response.end("file not found")
// })

// third way using pipe 
const readstream = fs.createReadStream("mytext.txt");
readstream.pipe(response);

});



anuj_server.listen(8000, "127.0.0.1");
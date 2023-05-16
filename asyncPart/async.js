const fs = require("fs");

// fs.writeFile("heyasync.txt", "hey i am first file using async ", 
// (err) => {
//     console.log("I am run")
// }
// )

// fs.appendFile("heyasync.txt", "add one more line " ,
// (err) => {
//     console.log("i am completed")
// }
// )

fs.readFile(
    "heyasync.txt", "utf-8" , (err, data) => {
        console.log(data)
    }
)


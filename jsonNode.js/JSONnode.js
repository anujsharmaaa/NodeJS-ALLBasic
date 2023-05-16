const fs = require("fs");

// convert object to json object 

// const Details = {
//     name : "anuj",
//     surname : "sharma", 
//     details : "67, Dehradun ", 
// }


// const jsonData = JSON.stringify(Details);
// console.log(jsonData);


// convert JSON object to json 

// const DATAOBJECT = JSON.parse(jsonData);
// console.log(DATAOBJECT);



// fs.writeFile("iamnew.json", jsonData, (err) =>{
//     console.log("done");
// } )


fs.readFile("../jsonNode.js/iamnew.json", "utf-8" , ( err, data) => {
    const showData = JSON.parse(data)
    console.log(showData)
    console.log(err)
})













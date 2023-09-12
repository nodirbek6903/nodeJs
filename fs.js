const fs = require("fs")
const path = require("path")

// fs.mkdir(path.join(__dirname, "templates"), err => {
//     if(err) throw new Error()
//     console.log("folder was created successfally");
// })


// fs.mkdir(path.join(__dirname,"notes"), err => {
//     if(err) throw new Error()

//     console.log("folder was created successfully");
// })
fs.writeFile(path.join(__dirname,"notes","december.txt"),"Create new course NodeJs", (err) => {
    if (err) throw new Error()

    console.log("File was created successfully");

    fs.appendFile(path.join(__dirname,"notes","december.txt")," and microservice Project", err => {
        if(err) throw new Error()

        console.log("File was changed successfully");
    })
})
const wyf = require("./index.js")
wyf.getCurrentTime("Asia/Hong_Kong").then((response) => {
    console.log(response)
})
wyf.list()
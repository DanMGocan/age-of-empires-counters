// $(".nav-container").load("./common/navbar.html");

let information = "";

const fs = require("fs");
fs.readFile("../data/units.json", "utf-8", (err, data) => {
    if(err) {
        console.log("error"+ err);
    } else {
        let units = JSON.parse(data);
        console.log(units[3]);
    }
})


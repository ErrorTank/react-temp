const fs = require("fs-extra");
const path = require("path");

const listDirFiles = ["static"];
const source = "../public";


const dest = process.argv[2] === 'dev' ? "build" : "dist";

Promise.all(listDirFiles.map(item => fs.copy(path.resolve(__dirname, source + "/" + item), path.resolve(__dirname,"../" + dest + "/" + item), {overwrite: true})))
    .then(() => console.log("Copying static files successful!"))
    .catch((err) => console.log(err))
;

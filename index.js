const express = require("express");
const app = express();
const { get } = require("http");
const { join } = require("path/posix");
const { append } = require("vary");
const path = require('path');
const hbs = require('hbs');

// const hostname = '127.0.0.1';
const PORT = process.env.PORT || 3500;

//               ***set up of path***
const viewsPath = path.join(__dirname, "/templates/views");
const partialsPath = path.join(__dirname, "/templates/partials");
// console.log(path.join(__dirname, "/templates/partials"));
// ******************************************************************

//      ***for adding CSS and JS Folder ***
app.use(express.static(__dirname + "/public/js"))
app.use(express.static(__dirname + "/public/css"))
app.use(express.static(__dirname + "/public"))
app.use(express.static(__dirname + "/public/video"))
// console.log(__dirname + "/public/js");
// *********************************************************

//                 ***Middleware***
app.set("view engine", "hbs");                //set a views engine
app.set("views", viewsPath);                  //change the views engine folder
hbs.registerPartials(partialsPath);           //set a hbs partials
//app.use(express.static(staticPath));         //set a static path for serve a static website i.e html page
// ***************************************************************************************

//                ***temp***
app.use(require('./router/routes'));                //page routing
// ****************************************************

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
    // console.log(`Server running at http://${hostname}:${port}/`);
});
const express = require("express")
const path = require("path")
const dotenv = require(`dotenv`);
const hbs = require("hbs")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//path to templates folder
const templatePath = path.join(__dirname,'/templates')

//.env configuration - different for each node
dotenv.config();
var hostname = process.env.HOSTNAME;
var port = process.env.PORT;

app.set("view engine", "hbs")
app.set("views", templatePath)

app.get("/", (req, res) =>{
    res.render("index")
})

app.listen(port,hostname, function () {
    console.log(`Server ` + nodenum + `: http://` + hostname + `:` + port);
})

module.exports = app;
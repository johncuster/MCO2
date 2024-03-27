const express = require("express")
const path = require("path")
const dotenv = require(`dotenv`);

const app = express()
//const hbs = require("hbs")
//const collection = require("./mongodb")
//const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const templatePath = path.join(__dirname,'/templates')

dotenv.config();
hostname = process.env.THIS_HOST;
port = process.env.PORT;

app.set("view engine", "hbs")
app.set("views", templatePath)

app.get("/", (req, res) =>{
    res.render("index")
})

app.listen(port,hostname, function () {
    //console.log("port connected");
    console.log(`Server ${process.env.NODE_NO} is running at:`);
    console.log(`http://` + hostname + `:` + port);
})

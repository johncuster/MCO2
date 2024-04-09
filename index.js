const express = require("express")
const path = require("path")
const dotenv = require(`dotenv`);
const hbs = require("hbs")
const app = express()

const { node1, node2, node3, node_utils } = require('./model/nodes.js');
const router = require('./router/router.js');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//path to the templates folder
const templatePath = path.join(__dirname,'/templates')

/*
hbs.registerHelper("ifEqual", function(a, b, options) {
    if (a === b) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
});
*/
//configure the .env variables
dotenv.config();
var hostname = process.env.HOSTNAME;
var port = process.env.PORT;
var nodenum = process.env.NODENUM;

//local machine credentials

app.set("view engine", "hbs")
app.set("views", templatePath)

app.use('/', router);
//app.get("/", (req, res) =>{
//    res.render("index")
//})

/*
switch (nodenum) {
    case `1`:
        replicator(sync.sync_central);
        break;
    case `2`:
        replicator(sync.sync_fragment, node2, 2);
        break;
    case `3`:
        replicator(sync.sync_fragment, node3, 3);
        break;
}

app.listen(port,hostname, function () {
    console.log(`Server ` + nodenum + `: http://`+ hostname + `:` + port);
})
*/
node1.getConnection()
    .then(connection => {
        // Release the acquired connection back to the pool\
        console.log('Connected to database.');
        connection.release();

        // Start the server
        app.listen(port, hostname, () => {
            console.log(`Server: http://${hostname}:${port}`);
        });
    })
    .catch(error => {
        console.error('Error:', error.message);
        process.exit(1); // Exit the process if unable to connect to the database
    });
module.exports = app;
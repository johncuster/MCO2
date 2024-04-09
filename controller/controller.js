const {node1, node2, node3, node_utils} = require('../model/nodes');
const dbquery = require('../model/database');
const dotenv = require(`dotenv`).config();

const controller = {
    //get all the data from the database here
    getIndex: async function (req, res) {
        if(await node_utils.pingNode(1)){
            console.log("HEY CONNECTED NODE 1");
        }
        else{
            console.log("BOO");
        }

        if(await node_utils.pingNode(1)){
            console.log("HEY CONNECTED NODE 2");
        }
        else{
            console.log("BOO NODE 2 down");
        }
        const appointments = await dbquery.selectQuery();
                
        res.render('index', {appointments})
    }
}

module.exports = controller;
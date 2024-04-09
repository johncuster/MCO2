const {node1, node2, node3, node_utils} = require('./nodes.js'); 

const db_queries = {
    selectQuery: async function () {
        const [rows, fields] = await node1.query('SELECT * FROM appointments');
        return rows;
    }
}

module.exports = db_queries;
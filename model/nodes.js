const mysql = require('mysql2/promise');
const dotenv = require(`dotenv`).config();

const node1 = mysql.createPool({
    host: process.env.DBHOST,
    user: "root",
    password: "root",
    database: 'appointments',
    //port: 3306
})



/*
async function getAppointments() {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM appointments');
        return rows;
    } catch (error) {
        console.error('Error fetching appointments:', error);
        throw error;
    }
}

node1.getConnection((err, connection) => {
    if (err) {
        console.error('Error getting connection from the node1:', err);
        return;
    }

    console.log('Connected to database.');
    connection.release();
});
*/

/*
const node1 = mysql.createPool({
    host: process.env.DBHOST01,
    user: process.env.DBUSER01,
    port: process.env.DBPORT01,
    password: process.env.DBPASS01,
    database: 'appointments',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 5000, 
    queueLimit: 0
});

const node2 = mysql.createPool({
    host: process.env.DBHOST02,
    port: process.env.DBPORT02,
    user: process.env.DBUSER02,
    password: process.env.DBPASS02,
    database: 'appointments',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, 
    idleTimeout: 5000, 
    queueLimit: 0
});

const node3 = mysql.createPool({
    host: process.env.DBHOST03,
    port: process.env.DBPORT03,
    user: process.env.DBUSER03,
    password: process.env.DBPASS03,
    database: 'appointments',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, 
    idleTimeout: 5000, 
    queueLimit: 0
});

const nodes = [node1, node2, node3];

const node_utils = {
    pingNode: async function (node) {
        try {
            const [rows, fields] = await nodes[n - 1].query(`SELECT 1 + 1 as KEYCONNECT`);
            return true;
        }
        catch (err) {
            console.log(`Error: Failed to connect to Node ${n}. Server is not available.`);
            return false;
        }
    },

    getConnection: async function(n) {
        switch (node) {
            case 1: return await node1.getConnection();
            case 2: return await node2.getConnection();
            case 3: return await node3.getConnection();
        }
    }
}
*/
module.exports = {
    node1: node1,
    //getAppointments:getAppointments,
    //node2: node2,
    //node3: node3,
    //node_utils
}
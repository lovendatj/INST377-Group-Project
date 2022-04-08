const mysql = require('mysql');
const config = require('../config/config');

const connection = mysql.createConnection({
    host    : config.host,
    port    : config.port,
    user    : config.username,
    password: config.password,
    database: config.database

});

// Default async query, 
// Params:
//      sql: SQL query string
//      params: params for query
// Note: Be sure to connect to the database before running this example
const query = async(sql, params) => {
    return new Promise((resolve, reject) => {
        connection.connect();
        connection.query(sql, params, (err, rows) => {
            if (err) {
                connection.end();
                return reject(err);
            }
            connection.end();
            resolve(rows);
        });
    });
}    

// Custom query example
// Params: Can pass request params to the query
// Note: Be sure to connect to the database before running this example
//       and disconnect after running it. Export function at bottom.
const getMusic = async(id=null) => {
    if (id !== null) {
        const result = await query('SELECT * FROM tracks WHERE track_id = ?', [id]);
        return result;
    } 
    const result = await query('SELECT * FROM tracks', []);
    return result;
}
const addMusic = async(body) => {
    const result = await query('INSERT INTO tracks SET ?', [body]);
    return result;
}
const deleteMusic = async(id) => {
    const result = await query('DELETE FROM tracks WHERE track_id = ?', [id]);
    return result;
}
const updateMusic = async(id, body) => {
    const result = await query('UPDATE tracks SET ? WHERE track_id = ?', [body, id]);
    return result;
}

// This is an example request
const getCustomResult = async() => {
    const result = await query('SELECT * FROM `TABLE_NAME` WHERE custom_id = ?', [id]);
    return result;
};

// This request is an example of a custom query that retrieves all tables
const getAllTables = async() => {
    const result = await query('SHOW TABLES', []);
    return result;
};


// Export the custom query functions
// Note: Not using the default query function because it stops
//       unexpected errors from being thrown.
module.exports = {
    // <function name>
    getMusic,
    getAllTables // Shows all tables in the database
};
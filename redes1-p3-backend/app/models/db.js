const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password : dbConfig.PASSWORD,
    database : dbConfig.DB,
    multipleStatements : dbConfig.MULTIPLECONECTION
});

// open the MYsql connection
connection.connect(error => {
    if(error) throw error;
    console.log("Succesfully connected to the database.");
});

module.exports = connection;
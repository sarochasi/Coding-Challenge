const mysql = require('mysql2');

// Configure database connection
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',           
    password: 'root', 
    database: 'task_management', 
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();

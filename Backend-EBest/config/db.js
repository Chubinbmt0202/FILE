const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

const connectDB = async () => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('MySQL connection failed:', err.message);
            process.exit(1);
        } else {
            console.log('MySQL connected successfully');
            connection.release();
        }
    });
};

module.exports = { pool, connectDB };
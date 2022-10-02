const sql = require('mssql');

const sqlConfig = {
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DB,
    server: process.env.SQL_SERVER,
    options: {
        trustedConnection: true,
        keepAlive: true,
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

const connectDb = async () => {
    try {
        await sql.connect(sqlConfig)
    } catch (err) {
        console.log(`mssql err connection: ${err}`)
    }
}

module.exports = connectDb;
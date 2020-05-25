const 
    mysql = require('mysql')

module.exports = () => {
    return mysql.createConnection({
        host: "192.168.43.101",
        user: "admin",
        password: "Xiaomi3325.",
        database: "crmapp",
        insecureAuth : true
    })
}
// Connect to MySQL database
// Query 
// Console.log results
 
const mysql = require ('mysql2') // import mysql2 library

// connect to our databases 
const db = mysql.createConnection({
    host: '34.170.135.140',
    user: 'root',
    password: 'BuildingSoFLo',
    database: 'swecc-summer-2022',
})

// run a simple query
db.query('SELECT * FROM Books_cp', (err, results)=> {
    if (err) {
        console.log(err)
    }
    //output the results
    console.log(results)
    db.end()
})

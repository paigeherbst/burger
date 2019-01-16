var mysql = require('mysql');
var connection;

// Setting up connection for use on Heroku
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
// Localhost connection
else {
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Database!DreamGirl28',
    database : 'burgers_db'
  });
};

module.exports = connection;
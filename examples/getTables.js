/*
  To start this sqlite3 module must be installed.
  Since its in the dependencies in the package.json
  you can just type "npm i" from the root directory of this project
  to start a server with this configuration (when you have node installed)
  you type: node <filename> 
  (ex in a consolewindow when you are in the examples dir, type: node getTables.js)
*/
var sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./weather.db', (err)=>{
  if(err){
    console.log(err.message)
  }
  else{
    console.log("connected to db");
  }
})

//GETTING ALL TABLES AVAILABLE
console.log("ALL TABLES");
db.each(`select name from sqlite_master where type='table'`, (err, row) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(row);
  }
});
// Require mysql and inquirer npm packages
var mysql = require("mysql");
var inquirer = require("inquirer");

// connection for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

// Enter password to root here. 
  password: "",
  database: "bamazon"
});







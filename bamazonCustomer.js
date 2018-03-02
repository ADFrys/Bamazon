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

//Once connected, show id connected and run display product list function.
connection.connect(function(error) {
  if (error) throw error;
  console.log("connected as id " + connection.threadId + "\n");
  displayProductList();
  askWhatPurchase();
});

// Function that displays the list of products available
function displayProductList() {
  console.log("Welcome to Bamazon! Here is a list of products available for purchase...\n");
  connection.query("SELECT item_id, product_name, price FROM products", function(error, response){
  	if(error) throw error;
  	// for loop that organizes the output of product id, name and price
  	for (var i=0; i< response.length; i++) {
      console.log("Item ID: " + response[i].item_id + " || Product: " + response[i].product_name + " || Price: " + "$" + response[i].price);
  	}
  });
}

// Function that asks the customers what they would like to purchase
function askWhatPurchase() {
  connection.query("SELECT * FROM products", function(error, response) {
    if (error) throw error;
  inquirer.prompt([
  {
  	type: "list",
  	name: "item_id",
  	message: "Please select the item id you would like to buy.",
  	choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
  },
  {
    name: "quantity",
    type: "input",
    message: "How many do you want to purchase?",
    validate: function(value) {
    	if (isNaN(value) === false) {
        return true;
    	  }
        console.log("\nInvalid entry. Please enter a number.");
        return false;
      }
    }
  ]).then(function(answer) {
    var chosenItem = answer.item_id;
    var quantity = answer.quantity;
    // checks to be sure that the quantity requested is greater than the inventory
    if (quantity > response[chosenItem-1].stock_quantity) {
      console.log("Insufficient quantity!"); 
      return connection.end();

    }
    // Fulfills the order
    console.log("You are purchasing..." + "\nitem id: " + chosenItem + "\nquantity: " + quantity);
    connection.query(
      "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: response[chosenItem -1].stock_quantity - quantity
      },
      {
        item_id: chosenItem
      },
    ],
        function(err, res) {
          console.log(" Your credit card will be charged $" + response[chosenItem -1].price*quantity);
          connection.end();
        }
      );
    })
  })
}
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

connection.connect(function(error) {
  if (error) throw error;
  console.log("connected as id " + connection.threadId + "\n");
  managerOptions();
});

// Function that shows manager menu
function managerOptions() {
  console.log("Welcome Bamazon manager!\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    inquirer.prompt({
      type: "list",
      name: "manager_menu",
      message: "Please select what you would like to do:\n",
      choices: ["View products for sale", "View low inventory", "Add to inventory", "Add new product"]
    })
    .then(function(answer) {
      // Displays products, price and stock quantity
      if (answer.manager_menu === "View products for sale") {
      	console.log("Viewing list of products for sale:\n");
        for (var i=0; i< res.length; i++) {
          console.log("Item ID: " + res[i].item_id + " || Product: " + res[i].product_name + " || Price: " + "$" + res[i].price + " || quantity: " + res[i].stock_quantity);
  	    }
      }
      // Displays low inventory
      if (answer.manager_menu === "View low inventory") {
      	console.log("Viewing low inventory:\n");
      	for (var j=0; j<res.length; j++) {
      	  if (res[j].stock_quantity <5) {
            return console.log("Item ID: " + res[j].item_id + " || Product: " + res[j].product_name + " || Price: " + "$" + res[j].price + " || quantity: " + res[j].stock_quantity);
      	  }
        }
      }
      if (answer.manager_menu === "Add to inventory") {
      	console.log("Add to inventory...\n");
        addInventory();
      }	
      if (answer.manager_menu === "Add new product") {
      	console.log("Add a new product...\n");
        addProduct();
      	//should allow the manager to add a completely new product to the store.
      }	
    })
  })
}

// Function that displays a prompt that will let the manager "add more" of any item currently in the store.
function addInventory() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    inquirer.prompt([
    {
      type: "list",
      name: "inventoryId",
      message: "Please select which product_id you would like to add inventory to:\n",
      choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
    },
    {
    name: "quantity_inventory",
    type: "input",
    message: "How much inventory do you want to add?",
    validate: function(value) {
      if (isNaN(value) === false) {
        return true;
      }
      console.log("\nInvalid entry. Please enter a number.");
        return false;
      }
    }
  ]).then(function(answer) {
    var productChosen = parseInt(answer.inventoryId);
    var quantity = parseInt(answer.quantity_inventory);
    console.log("You are adding to inventory..." + "\nitem id: " + productChosen + "\nquantity: " + quantity);
    connection.query(
      "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: res[productChosen -1].stock_quantity + quantity
      },
      {
        item_id: productChosen
      },
    ],
        function(err, res) {
          console.log("Sucessfully added to inventory");
        }
      )  
    })
  })
};

// Function that allows a manager to add a product
function addProduct() {
  console.log("This is running");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter the name of the product you want to add.\n",
    },
    {
    type: "input",    
    name: "department",
    message: "Please enter the name of the department this product belongs in.\n",
    },
    {
      type: "input",
      name: "price",
      message: "Please enter the price of the item (enter numeric digits only, can include decimals)."
    },
    {
      type: "input",
      name: "stock",
      message: "Please enter how much stock you want to add of this product (enter whole numbers only)."
    }
  ]).then(function(answer) {
  connection.query(
  "INSERT INTO products SET ?",
    {
      product_name: answer.name,
      department_name: answer.department,
      price: answer.price,
      stock_quantity: answer.stock 
    },
      function(err, res) {
        console.log(answer.stock + " new product(s) named " + answer.name + " inserted!\n");
        }
      );
    })
  })
}
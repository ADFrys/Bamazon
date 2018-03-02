DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR (45) NOT NULL,
  department_name VARCHAR (45) NULL,
  price DECIMAL (10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("keyboard", "electronics", 24.99, 100), ("mouse", "electronics", 9.99, 200), 
("laptop", "electronics", 1000, 50), ("vitamins", "health", 10.25, 500), ("dog food", "pet supplies", 30, 200), 
("cat food", "pet supplies", 24.99, 300), ("bandages", "health", 3.99, 900), ("sweatshirt", "clothing", 24.99, 10), 
("jeans", "clothing", 29.99, 20), ("t-shirt", "clothing", 9.99, 35), ("pencil", "office supplies", 1.99, 1);



# Bamazon_Mysql_Node_App

**Bamazon Mysql Node app uses a Mysql database to check and 'fulfill' product orders.**

**For convenience, I have recorded two videos of the working node app. 
See the videos below:**

**CUSTOMER VIEW VIDEO**
https://drive.google.com/file/d/1SmXrN-cKzxIIN5N6sVQ0OojHO_F_enSJ/view?usp=sharing

**MANAGER VIEW VIDEO**
https://drive.google.com/file/d/1gXksrsUkR1JDQ1kGHKgoq9B59sManqLM/view?usp=sharing

*Bamazon does the following...*

**CUSTOMER VIEW**

* Type "Node bamazonCustomer.js" in the command line to run the app. 

* You will be shown a list of products for purchase along with their cost. Select the item and the quantity you want to purchase. 

* The amount of inventory will be checked and if there isn't enough inventory, then you will be notified. However, if there is enough inventory, your request will be fulfilled. The total amount of your purchase will appear and the inventory will be subtracted from the mysql database for that item. 

**MANAGER VIEW**

* Type "Node bamazonManager.js" in the command line to run the app.

* You will be shown a list of menu options:
	* If you select "View products for sale", you will see a list of item ids, product names, prices and stock quantities.
	* If you select "View low inventory", you will see the products with a stock quantity of less than 5.
	* If you select "Add to inventory", you will be asked which current product you would like to add stock to. The stock quantity will be updated in the mysql database as well.
	* If you select "Add new product", you will be asked a series of questions about the new product to be added (name, department, price, etc.). This new item will be added to the mysql database as well.

- If you want to clone this repo and run it, you will need to create your own Mysql database using the Mysql queries provided in the file "BamazonSchema.sql". In addition, you will want to enter your own password in both the "bamazonCustomer.js" and the "bamazonManager.js" files. The password is not shown for security reasons. 

- A package.json file is provided in the repo, but you will have to install the dependencies. The npm packages required are inquirer and mysql. For example, in the command line type "npm install mysql".


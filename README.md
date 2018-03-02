# Bamazon_Mysql_Node_App

**Bamazon Mysql Node app uses a Mysql database to check and 'fulfill' product orders.**

*Bamazon does the following...*

* Type "Node bamazonCustomer.js" in the command line to run the app. 

* You will be shown a list of products for purchase along with their cost. Select the item and the quantity you want to purchase. 

* The amount of inventory will be checked and if there isn't enough inventory, then you will be notified. However, if there is enough inventory, your request will be fulfilled. The total amount of your purchase will appear and the inventory will be subtracted from the mysql database for that item. 

- If you want to clone this repo and run it, you will need to create your own Mysql database using the Mysql queries provided in the file "BamazonSchema.sql". In addition, you will want to enter your own password on line 13 of the file "bamazonCustomer.js". The password is not shown for security reasons. 

- A package.json file is provided in the report, but you will have to install the dependencies. The npm packages required are inquirer and mysql. For example, in the command line type "npm install mysql".

- For convenience, I have included a video/screenshots of the working Node App. 

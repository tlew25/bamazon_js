var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
 host: "localhost",

 // Your port; if not 3306
 port: 3306,

 // Your username
 user: "root",

 // Your password
 password: "Peppa$$88",
 database: "bamazondb"
});

connection.connect(function(err, res) {
 if (err) throw err;
 console.log("connected as id " + connection.threadId + "\n");
});
displayProduct();

function displayProduct() {
    connection.connect(
      "select * from all products",
      function(err, res) {
        if (err) throw err;
        
      
        // runs for loop through contents of response and table created with mysql
        for (i = 0; i < res.length; i++) {
          console.log( "id" + res[i].id + "product name" + res[i].product_name + "department" + res[i].department_name + "price" + res[i].price + "quantity" + res[i].stock_quantity);
        
        }
      });
        // purchaseStart();
        connection.end();
      }
  
  //################################################################
  
  // function which prompts the user for product id
  // function purchaseStart() {
  //   inquirer
  //     .prompt(
  //       {
  //         name: "ID",
  //         type: "input",
  //         message: "What is the id number  of your product?"
  //       },
  //       {
  //         name: "stockQuantity",
  //         type: "input",
  //         message: "How many units would you like to purchase today?"
  //       }
  //     )
  //     .then(function(answer) {
  //       //take answers and pass through as variable parameters
  
  //       var requestedQuantity = answer.stock_quantity;
  //       var idRequested = answer.ID;
  //       purchasePrompt(idRequested, requestedQuantity);
  //     });
  // } // end of purchaseStart function
  
  // //################################################################
  // function purchasePrompt(ID, quantityLeft) {
  //   // when finished prompting, insert a new item into the db with that info
  //   connection.connect(
  //     // selects id using where
  //     "select * from products where id =" + ID,
  //     function(err, res) {
  //       if (err) throw err;
  //     }
  //   );
  //   if (quantityLeft <= res[0].stock_quantity) {
  //     // this takes price and multiples by the quantity chosen
  //     var total = res[0].price * quantityLeft;
  //     // calculates price for customer then logs it
  //     console.log(" Your order is now being processed!!!");
  //     console.log(
  //       " Your total for" +
  //         quantityLeft +
  //         "" +
  //         res[0].product_name +
  //         "comes out to" +
  //         total
  //     );
  //     //subtracts from quantityLeft with requestedQuantity
  //     connection.connect(
  //       "update products set stock_quantity = stock_quantity - " +
  //         requestedQuantity +
  //         " where id =" +
  //         ID
  //     );
  //   } else {
  //     console.log(
  //       " Sorry but we do not have enough of your item in stock" +
  //         res[0].product_name +
  //         " to finish the online order."
  //     );
  //   }
  //   displayProduct();
  // } // end of purchase prompt function
  // displayProduct();
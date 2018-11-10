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

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  displayProduct();
});


function displayProduct() {
var query = connection.query(
    "SELECT * FROM products",
    function (err, res) {
      if (err) throw err;


      // runs for loop through contents of response and table created with mysql
      for (i = 0; i < res.length; i++) {
        console.log("id " + res[i].id 
        + " product name " + res[i].product_name
         + " department " + res[i].department_name
          + " price " + res[i].price
           + " quantity " + res[i].stock_quantity);
      }
    });
  purchaseStart();
}
function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole number above zero';
	}
}


//################################################################

// function which prompts the user for product id
function purchaseStart() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "ID",
        message: "What is the id number  of your product?",
        validate: validateInput,
        filter: Number
      },
      {
        type: "input",
        name: "stockQuantity",
        message: "How many units would you like to purchase today?",
        validate: validateInput,
        filter: Number
      }
    ])
    .then(function(answer) {
      //take answers and pass through as variable parameters

      var requestedQuantity = answer.stockQuantity;
      var idRequested = answer.ID;

      query = "SELECT * FROM products WHERE ?";
      connection.query(query, {id: idRequested}, function(err, res){

        if(res.length === 0){
          console.log("error!");
          throw err;

          // displayProduct();

        }else{
          var selection = res[0];

          if(requestedQuantity <= selection.stock_quantity) {
  
                console.log(" Your order is now being processed!!!");

            var stockUpdate = "UPDATE products SET stock_quantity = " + (selection.stock_quantity - requestedQuantity) + " WHERE id = " + idRequested;
            
            connection.query(stockUpdate, function(err, res){
              if(err) throw err;


              console.log("Your order is completed cool beans!! Pay me now!!!" + selection.price * requestedQuantity);
              console.log(requestedQuantity);

              inquirer
              .prompt({
                name: "choose",
              type: "list",
            message: "would you like to purchase more today?",
            choices: [
              "Yes I would!",
              "No, thanks"
            ]
            
              })
              .then (function(answer){
                switch (answer.choose){
                   case "Yes I would!":
                   displayProduct();
                   break;

                   case "No, thanks":
                   connection.end();
                   break;
                }
              })
              
            })
        }else{
          displayProduct();
          // change to error message
          console.log("Sorry but we cannot process that quantity amount");
          console.log("We will have more in stock soon! " );
        }
      }
   
     
    });
})
} // end of purchaseStart function
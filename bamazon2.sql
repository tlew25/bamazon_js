DROP DATABASE IF EXISTS bamazondb;
--##############################################
CREATE DATABASE bamazondb;
--###############################################
USE bamazondb;
--################################################
CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(95) NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);
--#################################################

--###################################################
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Red Dead Redemption II", "Video Games", 59.99, 21);
--#####################################################
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Durag", "Hair Care", 2.99, 41);
--####################################################
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cherry Wood Desk", "Furniture", 189.99, 6);
--#####################################################
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("MacBook Pro 2018", "Computer", 1299.99, 3);
--####################################################
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nikon Camera", "Photo", 1559.99, 15);
--#####################################################
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nike Air Force 1's", "Footwear", 59.99, 11);
--####################################################
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Complex Magazine", "News", 6.99, 20);
--#####################################################
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fundamentals of JavaScript", "Literature", 12.99, 5);
--####################################################
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Adidas White Joggers", "Apparel", 56.99, 9);
--#####################################################
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Louis Vitton Dress pants", "Apparel", 2222.99, 14);
--####################################################


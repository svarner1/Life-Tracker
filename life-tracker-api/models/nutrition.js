/*
  In the models/order.js file import the db, create an Order class, and export it.
  Add two static, async methods to the class:
  The listOrdersForUser method will return all orders that the authenticated
    user has created. Leave it empty for now except for some comments explaining
    what will be done.
  The createOrder method will take a user's order and store it in the database. 
    Leave it empty for now except for some comments explaining what will be done.

*/

const db = require("../db")

class Order {
    static async listOrdersForUser({id, customer_id }){
       //will return all orders that the authenticated user has created
    }

    static async CreateOrder({ order_id, product_id, discount }){
        //method will take a user's order and store it in the database
    }
}

module.exports = Order
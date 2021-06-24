/*
    In the models/store.js file import the db, create a Store class, and export it. 
    Add a single static, async method to the class called listProducts. That method 
    should run a SQL query that searches the database for all products and returns a 
    list of them.
*/

const db = require("../db")

class Store {
    static async listProducts(){
        //run a SQL query that searches for all products
        //returns a list of them
    }
}

module.exports = Store
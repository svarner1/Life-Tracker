const db = require("../db")

class ExerciseData {
    static async listExerciseDataForUser({id, customer_id }){
       //will return a list of all the 
    }

    static async createExerciseEntry({ order_id, product_id, discount }){
        //method will take a user's order and store it in the database
    }
}

module.exports = Order
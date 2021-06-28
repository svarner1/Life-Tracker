const db = require("../db")

class ExerciseData {
    static async listExerciseDataForUser({id, logged_exercise_id}){
       //will return a list of all the 
    }

    static async createExerciseEntry({ users_id, duration, intensity }){
        //method will take a user's order and store it in the database
    }
}

module.exports = ExerciseData
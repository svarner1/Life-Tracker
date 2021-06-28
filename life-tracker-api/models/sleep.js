const db = require("../db")

class SleepData {
    static async listSleepDataForUser({id, sleep_entry_id}){
       //will return a list of all the 
    }

    static async createSleepEntry({users_id, beginning_date, ending_date}){
        //method will take a user's order and store it in the database
    }
}

module.exports = SleepData
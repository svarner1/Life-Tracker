/*
     Back in the routes/(each category) files, create GET and POST requests at the / endpoint. 
     The GET request should call the list(Data)ForUser method and the POST request should call the create(entry) method.
    Add both routes to the server.js file below the auth routes.
*/
const express = require("express")
const ExerciseData = require("../models/exercise")
const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const exerciseData = await ExerciseData.listExerciseDataForUser(req.body)
    return res.status(200).json({ exerciseData })
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
    try {
      const newExerciseEntry = await ExerciseData.createExerciseEntry(req.body)
      return res.status(200).json({ newExerciseEntry })
    } catch (err) {
      next(err)
    }
})

module.exports = router

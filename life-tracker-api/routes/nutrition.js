/*
     Back in the routes/(each category) files, create GET and POST requests at the / endpoint. 
     The GET request should call the list(Data)ForUser method and the POST request should call the create(entry) method.
    Add both routes to the server.js file below the auth routes.
*/
const express = require("express")
const NutritionData = require("../models/nutrition")
const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const nutritionData = await NutritionData.listNutritionDataForUser(req.body)
    return res.status(200).json({ nutritionData })
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
    try {
      const newNutritionEntry = await NutritionData.createNutritionEntry(req.body)
      return res.status(200).json({ newNutritionEntry })
    } catch (err) {
      next(err)
    }
})

module.exports = router

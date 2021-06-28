/*
     Back in the routes/(each category) files, create GET and POST requests at the / endpoint. 
     The GET request should call the list(Data)ForUser method and the POST request should call the create(entry) method.
    Add both routes to the server.js file below the auth routes.
*/
const express = require("express")
const SleepData = require("../models/sleep")
const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const sleepData = await SleepData.listSleepDataForUser(req.body)
    return res.status(200).json({ sleepData })
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
    try {
      const newSleepEntry = await SleepData.createSleepEntry(req.body)
      return res.status(200).json({ newSleepEntry })
    } catch (err) {
      next(err)
    }
})

module.exports = router

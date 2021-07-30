// Open up the routes/(categoryPage)  file and import the requireAuthenticatedUser middleware
// Add the middleware to both the GET and POST routes.
// In each route, extract the user from res.locals and pass them to the list(category data) ForUser and create(entry) 
//     methods on the (category page) class. Make sure to also pass the order in the create(entry) method
// The GET route should return JSON where the array of orders is stored on the (logged_category) property
// The POST route should return JSON where the new order is is stored on the (logged_item *in model*) property

const express = require("express")
const ExerciseData = require("../models/exercise")
const security = require("../middleware/security")
const router = express.Router()

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { user } = res.locals
    console.log( user )
    const exerciseEntry = await ExerciseData.createExerciseEntry({exerciseEntry: req.body, user})
    return res.status(201).json({ exerciseEntry })
  } catch (err) {
    next(err)
  }
})

router.get("/", async (req, res, next) => {
  try {
    const { user } = res.locals
    console.log("current user", user)
    const listedExerciseData = await ExerciseData.listExerciseDataForUser()
    return res.status(200).json({ listedExerciseData })
  } catch (err) {
    next(err)
  }
})

// router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
//   try {
//     const { user } = res.locals
//     console.log("LOOK HERE", user);
//     const listedExerciseData = await ExerciseData.listExerciseDataForUser({user})
//     return res.status(200).json({ listedExerciseData })
//   } catch (err) {
//     next(err)
//   }
// })

router.get("/:exerciseEntryId", async (req, res, next) => {
  try {
    //fetch a single exercise entry
    const { exerciseEntryId } = req.params
    console.log("Exercise Entry Id", exerciseEntryId)
    const exerciseEntry = await ExerciseData.fetchExerciseEntryById({exerciseEntryId} )
    console.log("Exercise entry", exerciseEntry)
    return res.status(200).json({ exerciseEntry })
  } catch(err) {
    next(err)
  }
})

module.exports = router

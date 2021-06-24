/*
    Back in the routes/store.js file, import the Store model, create a new router
    , and export it. 
    
    Add a single GET request at the / endpoint that calls the 
    listProducts method of the Store model and returns the results as the products
     key of an object. This is the main endpoint the frontend will request to receive 
     all products for the store.
*/

const express = require("express")
const Store = require("../models/store")
const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    //return all the products
    //call the list products method of the Store model
    const products = await Store.listProducts(req.body)
    //returns the results as the products key of an object
    return res.status(200).json({ products })
  } catch (err) {
    next(err)
  }
})


module.exports = router

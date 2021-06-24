const express = require("express")
const Order = require("../models/order")
const Store = require("../models/order")
const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const userOrders = await Order.listOrdersForUser(req.body)
    return res.status(200).json({ userOrders })
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
    try {
      const createdOrder = await Order.CreateOrder(req.body)
      return res.status(200).json({ createdOrder })
    } catch (err) {
      next(err)
    }
})

module.exports = router

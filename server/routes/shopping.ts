import express  from "express";
import * as db from "../db/db";

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const store = await db.getStore()
    res.json({store})
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Could not find shop data' })
  }
})

router.post('/', async (req, res) => {
  try {
    const newStock = req.body
    const updatedStore = await db.addStock(newStock)
    res.json(updatedStore)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Could not find shop data' })
  }
})

export default router
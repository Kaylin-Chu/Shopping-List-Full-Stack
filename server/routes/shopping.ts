import express  from "express";
import { getStore } from "../db/db";

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const store = await getStore()
    res.json(store)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Could not find shop data' })
  }
})

export default router
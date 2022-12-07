import { Router } from "express";
import Habit from "../models/habit.model.js";
const router = Router()
router.post('/habit',async(req,res,next)=>{
  const habit = req.body
  const user = req.user
  try {
    const newHabit = await Habit.create({...habit,user: user.id })
    res.status(201).json(newHabit)
  } catch (error) {
    next(error)
  }
})
router.get('/habit',async(req,res,next)=>{
    const user = req.user
    try {
        const habits = await Habit.find({user: user.id})
        res.status(200).json(habits)
    } catch (error) {
        next(error)
    }
})
router.put('/habit/:id',async(req,res,next)=>{
   const {id} = req.params
   const user = req.user
   const update = req.body
   try {
    await Habit.updateOne({_id: id,user: user.id},update)
    res.status(200).json({message:'sucessfully updated'})
   } catch (error) {
    next(error)
   }
})
router.delete('/habit/:id',async(req,res,next)=>{
    const {id} = req.params
    const user = req.user
   try {
    await Habit.findOneAndDelete({_id:id,user: user.id})
    res.status(200).json({message:'successfully deleted'})
   } catch (error) {
    next(error)
   }
})
export default router
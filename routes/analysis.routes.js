import { Router } from "express";
const router = Router()
import Analysis from '../models/analysis.model.js'
router.get('/analysis',async(req,res,next)=>{
 const {id} = req.user
  try {
    const analysis = await Analysis.find({user: id})
    res.status(200).json(analysis)
  } catch (error) {
    next(error)
  }
})
router.post('/analysis',async(req,res,next)=>{
  const {id} = req.user
  const analysis = req.body
  try {
    const newAnalysis = await Analysis.create({...analysis,user:id})
    res.status(201).json(newAnalysis)
  } catch (error) {
    next(error)
  }
})
router.put('/analysis',async(req,res,next)=>{
   const update = req.body
   const { id } = req.user 
   try {
    const updatedAnalysis = await Analysis.updateOne({user: id},{update})
    res.status(200).json(updatedAnalysis)
   } catch (error) {
    next(error)
   } 
})
router.put('/analysis/habits',async(req,res,next)=>{
  const habits = req.body
  const {id} = req.user
  try {
    habits.forEach(async(habit) => {
      await Analysis.updateOne({user: id},{$push:{habits: habit._id}})      
    });
    const analysis = await Analysis.find({user: id})
    res.status(200).json(analysis)
  } catch (error) {
    next(error)
  }
})
export default router
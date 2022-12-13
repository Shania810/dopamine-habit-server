import { Router } from 'express'
const router = Router()
import Analysis from '../models/analysis.model.js'

router.get('/analysis', async (req, res, next) => {
  const { id } = req.user
  try {
    const analyses = await Analysis.find({ user: id }).populate('habits').lean()
    const lastAnalysis = analyses[analyses.length - 1]
    const durationAnalysis = new Date() - lastAnalysis.createdAt
    lastAnalysis.duration =  Math.floor( durationAnalysis / 1000 / 60 / 60 / 24 )
    /*lastAnalysis.habits.forEach((habit)=>{
      const duration = new Date() - habit.createdAt
      habit.duration = duration
      habit.completed = false
    })*/
    res.status(200).json(analyses)
  } catch (error) {
    next(error)
  }
})

router.get('/analysis/:id', async (req, res, next) => {
  const user = req.user
  const {id} = req.params
  try {
    const analysis = await Analysis.findOne({ user: user.id,_id:id}).populate('habits').lean()
    const durationAnalysis = new Date() - duration.createdAt
    analysis.duration = durationAnalysis
    analysis.habits.forEach((habit) =>{
    const duration = new Date() - habit.createdAt
    habit.duration = duration
    /* Math.floor( duration / 1000 / 60 / 60 / 24 )*/
    })
    res.status(200).json(analysis)
  } catch (error) {
    next(error)
  }
})

router.post('/analysis', async (req, res, next) => {
  const { id } = req.user
  const analysis = req.body
  try {
    const newAnalysis = await Analysis.create({ ...analysis, user: id })
    res.status(201).json(newAnalysis)
  } catch (error) {
    next(error)
  }
})

router.put('/analysis/:id', async (req, res, next) => {
  const update = req.body
  const user = req.user
  const {id} = req.params
  try {
    const updatedAnalysis = await Analysis.updateOne({ user: user.id ,_id:id}, { update })
    res.status(200).json(updatedAnalysis)
  } catch (error) {
    next(error)
  }
})
router.put('/analysis/habits/:id', async (req, res, next) => {
  const habits = req.body
  const user = req.user
  const {id} = req.params
  try {
    const habitsId = habits.map((habit)=> habit._id)
    await Analysis.updateOne(
      {user: user.id,_id: id },
      {$push: { habits: {$each : habitsId }}}
    )
    const analysis = await Analysis.findOne({ user: user.id}).populate('habits')
    res.status(200).json(analysis)
  } catch (error) {
    next(error)
  }
})
export default router

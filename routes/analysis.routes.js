import { Router } from 'express'
const router = Router()
import Analysis from '../models/analysis.model.js'

router.get('/analysis', async (req, res, next) => {
  const { id } = req.user
  try {
    const analysis = await Analysis.findOne({ user: id }).populate('habits').lean()
    const durationAnalysis = new Date () - duration.createdAt
    analysis.duration = Math.floor(durationAnalysis / 1000 / 60 / 60 / 24)
    analysis.habits.forEach((habit) =>{
    const duration = new Date() - habit.createdAt
    habit.duration = Math.floor( duration / 1000 / 60 / 60 / 24 )
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

router.put('/analysis', async (req, res, next) => {
  const update = req.body
  const { id } = req.user
  try {
    const updatedAnalysis = await Analysis.updateOne({ user: id }, { update })
    res.status(200).json(updatedAnalysis)
  } catch (error) {
    next(error)
  }
})
router.put('/analysis/habits', async (req, res, next) => {
  const habits = req.body
  const { id } = req.user
  try {
    const habitsId = habits.map((habit)=> habit._id)
    await Analysis.updateOne(
      {user: id},
      {$push: { habits: {$each : habitsId }}}
    )
    const analysis = await Analysis.findOne({ user: id }).populate('habits')
    res.status(200).json(analysis)
  } catch (error) {
    next(error)
  }
})
export default router

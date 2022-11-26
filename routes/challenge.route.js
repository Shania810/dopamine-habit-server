import {Router} from 'express'
import Challenge from '../models/challenge.model.js'
const router = Router()
router.get('/challenge',async(req,res,next)=>{
    try {
        const challenges = await Challenge.find()
        res.status(200).json(challenges)
    } catch (error) {
        next(error)
    }
})
router.post('/challenge',async(req,res,next)=>{
  const challenge = req.body
  try {
    const newChallenge = await Challenge.create(challenge)
    res.status(201).json(newChallenge)
  } catch (error) {
    next(error)
  }
})
export default router

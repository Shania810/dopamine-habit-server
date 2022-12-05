import { Router } from "express";
import uploadCloud from "../config/cloudinary.config.js";
import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
const router = Router()
router.get('/user',async(req,res,next)=>{
  const user = req.user
  try {
    const foundedUser = await User.findById(user.id)
    res.status(200).json({ username: foundedUser.username,imageURL: foundedUser.imageURL,email:foundedUser.email})
  } catch (error) {
    next(error)
  }
})
router.put('/user/upload-image',uploadCloud.single('image'),async(req,res,next)=>{
  const {id} = req.user
  try {
    const modifiedUser = await User.findByIdAndUpdate(id,{imageURL: req.file.path},{new: true})
    res.status(200).json(modifiedUser)
  } catch (error) {
    next(error)
  }
})
router.put('/user/edit-username',async(req,res,next)=>{
    const {id} = req.user
    const {username} = req.body
    try {
        const modifiedUser = await User.findByIdAndUpdate(id,{username},{new: true})
        res.status(200).json(modifiedUser)
    } catch (error) {
        next(error)
    }
})
router.put('/user/edit-password',async(req,res,next)=>{
    const {id} = req.user
    const { password } = req.body
    const salt = bcrypt.genSaltSync(10)
    const passwordHash = bcrypt.hashSync(password,salt)
    try {
        const modifiedUser = await User.findByIdAndUpdate(id,{passwordHash},{new: true})
        res.status(200).json(modifiedUser)
    } catch (error) {
        next(error)
    }
})
export default router
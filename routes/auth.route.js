import { Router } from "express";
import User from "../models/user.model.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import uploadCloud from "../config/cloudinary.config.js";
const router = Router()

router.post('/signup',
uploadCloud.single('image')
,async(req,res,next)=>{
    const {username,email,password,imageURl} = req.body
    console.log(imageURl)
    
    if(!username || !email || !password){
        res.status(400).json({message:'Provide username,email and password'})
        return
    }
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    if(!emailRegex.test(email)){
     res.status(400).json({message:'Provide a valid email address'})
     return
    }
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/
    if(!passwordRegex.test(password)){
        res.status(400).json({message:'Password must must contain at least 6 characters, one number, one upper case letter, and one special character.'})
        return
    }
    try {
        const userFound = await User.findOne({email})
        if(userFound){
            res.status(400).json({message:'User already registered'})
            return
        }
        const salt = bcrypt.genSaltSync(10)
        const passwordHash = bcrypt.hashSync(password,salt)
        const createdUser = await User.create({username,email,passwordHash})
        const {_id} = createdUser
        res.status(201).json({username,email,_id})

    } catch (error) {
        next(error)
    }
})
router.post('/login',async(req,res,next)=>{
    const {username,password} = req.body
    try {
        const user = await User.findOne({username})
        if(!user){
          res.status(400).json({message:'User not found'})
          return
        }
        const compareHash = bcrypt.compareSync(password,user.passwordHash)
        if(!compareHash){
          res.status(400).json({message: 'Invalid password'})
          return
        }
        const payload = {
            id: user._id,
            username: user.username
        }
        const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn: '1d' })
        res.status(200).json({...payload,token})
    } catch (error) {
        next(error)
    }
})
export default router

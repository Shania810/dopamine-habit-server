import express from "express";
import dotenv from "dotenv";
dotenv.config()
const app = express()
import config from './config/config.js'
config(app)
import connectDB from './db/db.config.js'
connectDB()
import authRoutes from './routes/auth.route.js'
app.use('/',authRoutes)
import auth from "./middlewares/auth.middleware.js";
app.use(auth)
import habitRoutes from './routes/habit.route.js'
app.use('/',habitRoutes)
import challengeRoutes from './routes/challenge.route.js'
app.use('/',challengeRoutes)
export default app
import express from "express";
import dotenv from "dotenv";
dotenv.config()
const app = express()
import config from './config/config.js'
config(app)
import connectDB from './db/db.config.js'
connectDB()
import authRoutes from './routes/auth.routes.js'
app.use('/',authRoutes)
import challengeRoutes from './routes/challenge.routes.js'
app.use('/',challengeRoutes)
import auth from "./middlewares/auth.middleware.js";
app.use(auth)
import userRoutes from './routes/edit.user.routes.js'
app.use('/',userRoutes)
import habitRoutes from './routes/habit.routes.js'
app.use('/',habitRoutes)
import analysisRoutes from './routes/analysis.routes.js'
app.use('/',analysisRoutes)

export default app
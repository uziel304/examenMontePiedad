import express  from 'express'
import morgan from "morgan";
import authRoutes from './routes/auth.routes.js'
import materialRoutes from './routes/material.routes.js'
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express()
app.use(morgan('dev'))
// app.use(cors)
app.use(express.json())
app.use(cookieParser())
app.use('/api',authRoutes)
app.use('/api',materialRoutes)

export default app;
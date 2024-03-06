import express from 'express'
import userRouter from './Routes/user.route.js'
import todoRouter from './Routes/todo.route.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'


const app =express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods:['GET','POST','DELETE','PUT'],
    credentials: true,
    allowedHeaders: 'Content-Type,Authorization, X-Auth-Token, Origin'
}))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.json({ limit: "16kb" }))
app.use(cookieParser())

app.use('/api/v1/user',userRouter)
app.use('/api/v1/todo',todoRouter)


export default app

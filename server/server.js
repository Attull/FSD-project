import express from "express"
import route from "./Routes/studentRoutes.js"
import dotenv from 'dotenv'
import cors from 'cors'
import conn from "./Database/conn.js"

const app =  express()

dotenv.config()
app.use(cors())
app.use(express.json())

app.use("/api",route)

conn().then(()=>{
    app.listen(5000, ()=>{
        console.log("listening on the PORT 5000")
    })
}).catch(err =>{
    console.log(err)
})


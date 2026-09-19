import express from "express"
import { user_router } from "./user.routes.js"
import { auther_routes } from "./author.routes.js"

const app=express()
app.use("/users",user_router)
app.use("/author",auther_routes)


app.use((req,res,next)=>{
    console.log(new Date().toLocaleString(),req.method);
    next()
})
//global error handler
app.use((err,req,res,next)=>{
    console.log("error",err);
    res.status(500).json("something went wrong")
    
})
app.listen(3000,()=>{ console.log("listening in port 3000");})

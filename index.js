const express=require("express")
const { connection } = require("./db")
const { userroute } = require("./routes/userroute")
const { blog } = require("./routes/blogroute")
require("dotenv").config()


const app=express()

app.use(express.json())

app.use("/user",userroute)
app.use("/blog",blog)


app.get("/",(req,res)=>{
    res.status(200).send("home page")
})


// app.listen(process.env.port,async ()=>{
//     try {
//         await connection
//         console.log("db is connected")
//     } catch (error) {
//         console.log(error)
//     }
//     console.log("server is running")
// })





app.listen(process.env.port,async ()=>{
    try {
        await connection
        console.log("db is connected")
    } catch (error) {
        console.log(error)
    }
    console.log("server is running")
})
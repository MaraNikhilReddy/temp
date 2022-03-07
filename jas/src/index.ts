import express from "express";

const app=express();
const port=3000;

app.get("/api",(req,res)=>{
    res.send("get call from web");
})

app.listen(port,()=>{
    console.log("listening to the port 3000");
})
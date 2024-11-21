import express from "express";
const app= express();
app.use(express.static("public folder"));
app.get("/",(req,res)=>{
    res.sendfile("google.html");
})
app.listen(3000,()=>{
    console.log("Server Started");
})
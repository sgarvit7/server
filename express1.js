import express from 'express';
const app = express();
 
app.get("/", (req, res)=>{
    res.send("Creating first express server")
})
app.listen(5000,()=>{
    console.log("server is running through 5000")
})
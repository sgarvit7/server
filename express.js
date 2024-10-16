import express from 'express';
const app = express();
app.get("/", (req, res)=>{
    res.send("Hello World");
});
app.put("/",(req,res)=>{
    res.send("put request");
})
app.get("/weather",(req,res)=>{
    res.send("get weather");
})
app.get("/weather",(req,res)=>{
    res.send("get weather");
})
app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})
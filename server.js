import express from 'express';
const a = express();

a.get("/",(req, res)=>{
res.send("happy world!")
}
)
a.listen(3000,()=>{
     console.log("server is running through 5000")
})
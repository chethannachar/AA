import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app=express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.post("/submit",(req,res)=>{
    const s=req.body.subject;
    const c1=req.body.a;
    const c2=req.body.h;
    console.log("Received message from React:",s);
});
app.listen(3000,()=>{
    console.log("The server is running on the port 3000");
});


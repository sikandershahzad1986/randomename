import express from "express";
import {randomSuperhero} from 'superheroes';
const app = express();
app.get("/",(req,res)=>{
res.render("index.ejs");
})

app.post("/submit",(req,res)=>{
const b = randomSuperhero();
res.render("index.ejs",{sh:b});
})

app.listen(3000,()=>{console.log('Server Started');})
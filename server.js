var express=require('express');
var app=express();
app.use(express.static('public'));
app.get("/",(req,res)=>{res.send("welcome Sir");});
app.listen(9000);

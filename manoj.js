const express = require('express');
require("./connection");
const Product = require('./product');
const app = express();
app.use(express.json());
app.get("/search/:key",(req,resp)=>{
    let data =await Product.find()
    resp.send("search done")
})
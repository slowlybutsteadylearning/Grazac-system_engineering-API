require("dotenv").config();
//import express
const express = require("express");
const connDb = require("./config/dbs");


const route= require("./route/user.route")
const adminRoute= require("./route/admin.route")

//create server instance
const app = express();
connDb();

// middleware
app.use(express.json())

app.get("/" ,(req, res)=>{
    res.send("<h1>Welcome Home.</h1>")
})

app.use("/api/v1",route);

app.use("/api/v1",adminRoute)



module.exports = app
require("dotenv").config();
//import express
const express = require("express");
// const { connDb } = require("./config/db");

// const route= require("./route/user.route")

//create server instance

const app = express();
// connDb();
// middleware
app.use(express.json())
app.get("/" ,(req, res)=>{
    res.send("<h1>Welcome Home</h1>")
})
// app.use("/api/v1",route)

module.exports = app
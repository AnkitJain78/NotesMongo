const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv")
dotenv.config()
const connect = mongoose.connect(`mongodb+srv://ankit:${process.env.PASSWORD}@ankit.pubxffr.mongodb.net/?retryWrites=true&w=majority`).then(()=>console.log("Database Connected")).catch((err)=>console.log(err))
module.exports = connect;
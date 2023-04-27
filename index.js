const mongoose = require("mongoose");
const methodOverride = require("method-override")
const connect = require('./connection')
const Note = require('./model/NotesModel')
const { engine } = require("express-handlebars");
const express = require("express");
const dotenv = require("dotenv")
const  Router  = require("./router/NotesRouter")
const app = express();
dotenv.config()
app.engine(
    "hbs",
    engine({
      layoutsDir: __dirname + "/views/layouts",
      defaultLayout: "main",
      extname: ".hbs"
    })
  );
app.set("view engine", "hbs");
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'))
connect.then(()=>console.log("Success")).catch((err)=>console.log(err))
app.set("view engine", "hbs")
app.use("/",Router)

app.listen(5003,()=>console.log("Listening!"))
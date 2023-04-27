const express = require("express");
const {
    HomeController,
    SearchController,
    ErrorController,
    InsertController,
    UpdateController,
    ListController,
    DeleteController
} = require("../controllers/notesController")
const Router = express.Router();
Router.get("/", HomeController);
Router.get("/list", ListController)
Router.get("/insert", InsertController)
Router.get("/update", UpdateController)
Router.get("/delete", DeleteController)
Router.get("/search", SearchController)
Router.post("/search", SearchController)
Router.post("/insert", InsertController)
Router.put("/update", UpdateController)
Router.delete("/delete", DeleteController)
Router.get("*",ErrorController);
module.exports = Router;
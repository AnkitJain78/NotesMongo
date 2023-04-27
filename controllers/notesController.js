const express = require("express");
const Note = require('../model/NotesModel')
const methodOverride = require("method-override")
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'))

module.exports.HomeController = function(req,res){
    res.render("home")
}
module.exports.SearchController = function(req,res){
    if(req.method==="GET"){
        res.render("search", {data: {title: "Please Search with the notes ID", description: "This is a great notes app"}})
    }
    else if(req.method==="POST"){
        const {id} = req.body
        Note.findOne({
            id: id
        }).lean().then((data)=>{
            res.render("search",{data: data})
        })
    }
}
module.exports.InsertController = function(req,res){
    if(req.method == "POST"){
         process.on('uncaughtException', function (err) {
            if(err.message.includes("duplicate key")){
                res.json({
                    message: "Duplicate ID"
                })
            }
          });
            const {title} = req.body
            const {description} = req.body
            const {id} = req.body
            const data = new Note({
                id:id,
                title:title,
                description:description
            })
            data.save().then(()=>{
                res.json({
                    message:"Data Inserted",
                    data: data
                })
            })
    }
    else
    res.render("insert")
}
module.exports.UpdateController = function(req,res){
    console.log(req.method)
    if(req.method == "PUT"){
        const {title, description, id} = req.body
        Note.updateOne({
            id: id
        }, {
            "$set": {
                title:title,
                description:description
            }
        }).then(()=>{
            res.json({
                message:"Data Updated"
            })  
        })
    }
    else
    res.render("update")
}
module.exports.ListController = function(req,res){
    Note.find().lean().then((body)=>{
        res.render("list",{data: body})
    })
}
module.exports.DeleteController = function(req,res){
    if(req.method == "DELETE"){
        const {id} = req.body
        Note.deleteOne({
            id: id
        }).then(()=>res.json({
            message: "Data deleted!"
        }))
    }
    else
    res.render("delete")
}
module.exports.ErrorController = function(req,res){
    res.render("error")
}

var express = require("express")
var app = express()
var router = express.Router()

//let projectController = require("../controller/project");
let controller = require("../controller/index")


// let client = require("../dbConnect");
// let projectsCollection;
// setTimeout(() => {
//     projectsCollection = client.MongoClient.db().collection("pets");
// }, 2000)


// const insertProjects = (project,callback) => {
//         projectCollection.insert(project,callback);
//     }


// const getProjects = (callback) => {
//     projectCollection.find({}).toArray(callback);
// }

app.get('/',(req,res) => {
    //     getProjects((err,result) => {
    //         if(err) {
    //             res.json({statusCode: 400, message: err})
    //         }
    //         else {
    //             res.json({statusCode: 200, message:"Success", data: result})
    //         }
    //     })
    //projectController.retrieveProjects(req,res)
    controller.projectController.retrieveProjects(req,res)

})

//post api
app.post('/',(req,res) => {
    //     console.log("New Project added", req.body)
    //     var newProject = req.body;
    //     insertProjects(newProject,(err,result) => {
    //         if(err) {
    //             res.json({statusCode: 400, message: err})
    //         }
    //         else {
    //             res.json({statusCode: 200, message:"Project Successfully added", data: result})
    //         }
    //     })
    

    //projectController.createProjects(req,res)
    controller.projectController.createProjects(req,res)
    })



module.exports = app;
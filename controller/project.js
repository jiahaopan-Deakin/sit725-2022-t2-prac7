let client = require("../dbConnect");
let projectsCollection;
setTimeout(() => {
    projectsCollection = client.MongoClient.db().collection("pets");
}, 2000)


const insertProjects = (project,callback) => {
        projectsCollection.insert(project,callback);
    }


const getProjects = (callback) => {
    projectsCollection.find({}).toArray(callback);
}

const createProjects = (req,res) => {
        console.log("New Project added", req.body)
        var newProject = req.body;
        insertProjects(newProject,(err,result)  => {
            if(err) {
                res.json({statusCode: 400, message: err})
            }
            else {
                res.json({statusCode: 200, message:"Project Successfully added", data: result})
            }
        })
    }

const retrieveProjects = (req, res) => {
        getProjects((err,result) => {
            if(err) {
                res.json({statusCode: 400, message: err})
            }
            else {
                res.json({statusCode: 200, message:"Success", data: result})
            }
        })
}


module.exports = {
        retrieveProjects, createProjects
    }
    
    
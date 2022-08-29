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

module.exports = {
    insertProjects, getProjects
}
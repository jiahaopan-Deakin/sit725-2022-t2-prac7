var express = require("express")
var app = express()
var cors = require('cors')
let projectRoutes = require("./routes/projectRoutes");
let dbConnect = require("./dbConnect"); 
let userRouters = require("./routes/userRoutes")

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/projects',projectRoutes)
app.use('/api/users',userRouters)


/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://JIAHAO814:814410Pjh@cluster0.gmcslkr.mongodb.net/PetsList?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true});*/


/*const createColllection = (collectionName) => {
        client.connect((err,db) => {
            projectCollection = client.db().collection(collectionName);
            if(!err) {
                console.log('MongoDB Connected')
            }
            else {
                console.log("DB Error: ", err);
                process.exit(1);
            }
        })
    }*/

    /*const cardList = [
        {
            title: "Kitten 2",
            image: "images/Kitten2.jpg",
            link: "About Kitten 2",
            desciption: "Demo desciption about kitten 2"
        },
        {
            title: "Kitten 3",
            image: "images/Kitten3.jpg",
            link: "About Kitten 3",
            desciption: "Demo desciption about kitten 3"
        }
    ]
    
    const insertProjects = (project,callback) => {
            projectCollection.insert(project,callback);
        }
    
    
const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}



app.get('/api/projects',(req,res) => {
        getProjects((err,result) => {
            if(err) {
                res.json({statusCode: 400, message: err})
            }
            else {
                res.json({statusCode: 200, message:"Success", data: result})
            }
        })
    })
    

app.post('/api/projects',(req,res) => {
        console.log("New Project added", req.body)
        var newProject = req.body;
        insertProjects(newProject,(err,result) => {
            if(err) {
                res.json({statusCode: 400, message: err})
            }
            else {
                res.json({statusCode: 200, message:"Project Successfully added", data: result})
            }
        })
    })*/
    



var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listening to: "+port)
    //createColllection("pets")
})

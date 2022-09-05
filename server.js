var express = require("express")
var app = express()
var cors = require('cors')
let projectRoutes = require("./routes/projectRoutes");
let dbConnect = require("./dbConnect"); 
let userRouters = require("./routes/userRoutes");
const { MongoUnexpectedServerResponseError } = require("mongodb");
const { response } = require("express");

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/projects',projectRoutes)
app.use('/api/users',userRouters)



app.get('/addNumbers/:n1/:n2', function(request, response) {
    response.json({statusCode: 200});
     //res.sendStatus(200);
})



var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listening to: "+port)
    //createColllection("pets")
})

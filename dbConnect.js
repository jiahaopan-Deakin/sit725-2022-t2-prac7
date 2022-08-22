require('dotenv').config()

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://JIAHAO814:814410Pjh@cluster0.gmcslkr.mongodb.net/PetsList?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true});

client.connect((err,db) => {

            if(!err) {
                console.log('MongoDB Connected')
            }
            else {
                console.log("DB Error: ", err);
                process.exit(1);
            }
        })

exports.MongoClient = client; 
    //createColllection("pets")
require('dotenv').config(); 
const mongo =require('mongodb');

const MongoClient=mongo.MongoClient;

const MONGO_URL= process.env.MONGO_URL;

let _db;


const mongoConnect = (callback) => {
    MongoClient.connect(MONGO_URL).then(client=>{
        console.log("connect to mongo");
        _db=client.db('airbnb');
        callback();
    }).catch(err=>{
        console.log('err while connecting to mongo',err);
        
    })
   
}
const getDB=()=>{
    if(!_db){
        throw new Error("No database connection");
    }
    return _db;
 
}

exports.mongoConnect=mongoConnect;
exports.getDB=getDB;
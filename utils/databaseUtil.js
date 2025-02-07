const mongo =require('mongodb');

const MongoClient=mongo.MongoClient;

const MONGO_URL="mongodb+srv://abhi1227:abhi1227@abhishek.j09j3.mongodb.net/?retryWrites=true&w=majority&appName=abhishek";

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
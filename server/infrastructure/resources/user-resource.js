var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var url = "mongodb://localhost:27017/";
var async = require('asyncawait/async');
var await = require('asyncawait/await');

function getUsers() {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("ngtraining");
    var users = await(dbase.collection("users").find({}).toArray());
    db.close();
    return users;
}

function getUser(id) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("ngtraining");
    var user = await(dbase.collection("users").findOne({_id: new ObjectId(id)}));
    db.close();
    return user;
}

function deleteUser(id) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("ngtraining");
    var user = await(dbase.collection("users").deleteOne({_id: new ObjectId(id)}));
    db.close();
    return user;
}

function updateUser(user) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("ngtraining");
    var user = await(dbase.collection("users").updateOne(user,{_id: new ObjectId(user.id)}));
    db.close();
    return user;
}

function addUser(user) {
    console.log('add user',user)
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("ngtraining");
    var user = await(dbase.collection("users").insertOne(user));
    db.close();
    return user;
}

module.exports = {
    getUsers: async(getUsers),
    getUser: async(getUser),
    deleteUser: async(deleteUser),
    updateUser: async(updateUser),
    addUser: async(addUser)
};
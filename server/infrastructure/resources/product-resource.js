var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var url = "mongodb://localhost:27017/";
var async = require('asyncawait/async');
var await = require('asyncawait/await');

function getProducts() {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("ngtraining");
    var Products = await(dbase.collection("products").find({}).toArray());
    db.close();
    return Products;
}

function getProduct(id) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("ngtraining");
    var Product = await(dbase.collection("products").findOne({_id: new ObjectId(id)}));
    db.close();
    return Product;
}

function deleteProduct(id) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("ngtraining");
    var Product = await(dbase.collection("products").deleteOne({_id: new ObjectId(id)}));
    db.close();
    return Product;
}

function updateProduct(Product) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("ngtraining");
    var Product = await(dbase.collection("products").updateOne(Product,{_id: new ObjectId(Product.id)}));
    db.close();
    return Product;
}

function addProduct(Product) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("ngtraining");
    var Product = await(dbase.collection("products").insertOne(Product));
    db.close();
    return Product;
}

module.exports = {
    getProducts: async(getProducts),
    getProduct: async(getProduct),
    deleteProduct: async(deleteProduct),
    updateProduct: async(updateProduct),
    addProduct: async(addProduct)
};
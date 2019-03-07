var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

MongoClient.connect('mongodb://127.0.0.1:27017/admin', function(err, db) {
    if(err) {
        throw err;
        Console.log(err);
    }
  /*  db.authenticate("admin","Thom2807",function(err,connected){
        if(err)
            console.log("Error in authenticating db:  "+err);
        else
        console.log("Db authenticated succesfully");
    });*/
    var collection = db.collection('test_insert');
    console.log(db);

 //   db.authdb("admin","Thom2807");
    console.log("============================");
 //   db.authSource("admin","Thom2807");
    collection.insert({a:2}, function(err, docs) {
        collection.count(function(err, count) {
            console.log(format("count = %s", count));
        });
    });

    // Locate all the entries using find
    collection.find().toArray(function(err, results) {
        console.dir(results);
        // Let's close the db
        db.close();
    });
});

/*
var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
 //   ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
 //   BSON = require('mongodb').pure().BSON,
    assert = require('assert');

// Connect using the connection string
MongoClient.connect("mongodb://localhost:27017/integration_tests", {native_parser:true}, function(err, db) {
    assert.equal(null, err);

    db.collection('mongoclient_test').update({a:1}, {b:1}, {upsert:true}, function(err, result) {
        assert.equal(null, err);
        assert.equal(1, result);

        db.close();
    });
});*/

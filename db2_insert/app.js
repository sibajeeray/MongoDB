var MongoClient = require('mongodb').MongoClient;

var url="mongodb://localhost:27017/";

MongoClient.connect(url, function(err,db){

    if(err) throw err;
    console.log('Connection Established');
    var dbo = db.db('myDB');
    var myobj = {name:'Sibajee Ray', address:'Ramnagar'};
    dbo.collection('customers').insertOne(myobj, function(err, res){

        if(err) throw err;
        console.log('Data Inserted.');
        console.log(res);
        db.close;
    }); 
});
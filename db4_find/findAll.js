var MongoClient = require('mongodb').MongoClient;

var url="mongodb://localhost:27017/";
MongoClient.connect(url, function(err,db){

    if(err) throw err;
    var dbo = db.db('test');

    
    dbo.collection('channels').find({}).toArray(function(err,res){

        console.log(res[0].channel_name);
        db.close;
    });
});
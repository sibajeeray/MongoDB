var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err,db){
    console.log('Connected');
    var dbo = db.db('myDB');
    dbo.collection("customers").find({}, { _id: 0}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
});
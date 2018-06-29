var MongoClient = require('mongodb').MongoClient;

var url="mongodb://localhost:27017/";
MongoClient.connect(url, function(err,db){

    if(err) throw err;
    var dbo = db.db('myDB');

    var data = [{name:'Sibajee ',address:'Ramnagar'},{name:'Subhasmita',address:'paradip'},{name:'Simadri',address:'puri'},{name:'sushant',address:'Balasore'}];
    dbo.collection('customers').findOne({}, function(err,res){

        console.log(res.name);
        db.close;
    });
});
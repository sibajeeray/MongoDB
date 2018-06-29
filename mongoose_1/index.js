var express = require('express');
var mongoose =  require('mongoose');
var bodyParser = require('body-parser');
var app = express();

var Book = require('./book.model.js');

var db = 'mongodb://localhost/test';
mongoose.connect(db);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/',function(req,res){
    res.send("This is Sibajee...");
});


///GET ALL THE BOOKS FROM COLLECTION
app.get('/books', function(req,res){

    console.log('Getting all the books');
    Book.find({}).exec(function(err,books){
        if(err)
            res.send("Could not fetch the book list..");
        
        else
            {
                console.log(books);
                res.json(books);
            }

    });

});


//GET ONE BOOK BY IT'S ID
app.get('/books/:id',function(req,res){
    Book.findOne({_id:req.params.id}).exec(function(err,book){
        if(err)
            res.send("Could not fetch the book.");
        else{
            console.log("Bok you are looking for is : "+book)
            res.json(book);
        }
    });
});


//SAVE NEW BOOK IN DB by save()
app.post('/saveBook',function(req,res){
   
    var newBook = new Book(); 

    
    newBook.title = req.body.title;
    newBook.author = req.body.author;
    newBook.category = req.body.category;

    newBook.save(function(err,book){
        if(err)
            res.send("Error occured while saving the book.");
        else{

                console.log('You just saved a book : '+book);
                res.send(book);
        }
    });
});

//SAVE NEW BOOK IN DB by create()
app.post('/saveBookcreate',function(req,res){
    Book.create(req.body,function(err,book){
         if(err)
             res.send("Error occured while saving the book.");
         else{
 
                 console.log('You just saved a book : '+book);
                 res.send(book);
         }
     });
 });



 //findOneUpdate record
 app.put('/update/:id',function(req,res){
     Book.findOneAndUpdate({_id:req.params.id},{$set:{title:req.body.title}},{upsert:true},function(err,book){
         if(err)
            console.log("Error occured while updating book details");
         else{
             res.send(book);
             console.log(book);
         }
     })
 });


app.listen(4444, function(){console.log('Listen to port no 4444')});
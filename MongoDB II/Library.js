const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/libraryDB', {
});

const db = mongoose.connection;

db.on('error',()=> {console.error('Mongoose connection error')})
db.once('open', () => {console.log('Mongoose is connected')});

const Book = new mongoose.Schema({
  title:{type:String, required:true},
  author:{type:String, required:true},
  yearPublished:{type:Number, required:true},
  genres:{type:Array},
  availableCopies:{ type:Number, default:5},
});

const Item = mongoose.model('Item', Book);




//Implement a function to add a new book to the database.
const newBook = new Item({
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                yearPublished: 1925,
                genres: ["Classic", "Novel"],
                availableCopies: 2
              });
newBook.save().then(() => console.log('Book added'));





// Implement a function to update the availableCopies of a book by its title.
 const updateNumOfCopies = async (title,availableCopies)=>{
   try{
    await Item.updateOne({title},{$set:{availableCopies}})
    console.log( "Number of copies updated")
   }catch(e){
    console.error('Error:',e);
   }
 };
 
 
 
 
 // Implement a function to find all books by a specific author.
 const deleteBook = async (author)=>{
   try{
     const book = await Item.deleteOne({author})
     if(book.deletedCount > 0){
      console.log(`The book by ${author} is deleted`);
    } else {
      console.log('No books found for this author.');
    }
    }catch(e){
      console.error('Error:',e);
    }
  };




  // Implement a function to delete a book by its title.
  const findBooks = async (author)=>{
    try{
     const books = await Item.find({author})
      if (books.length > 0) {
       console.log('These are the books:', books);
     } else {
       console.log('No books found for this author.');
     }
     }catch(error){
       console.error('Error:',error);
     }
   };
  
  


  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@calling the functions@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2//
  // updateNumOfCopies('The Great Gatsby',100)
  // findBooks("F. Scott Fitzgerald")
  // deleteBook("F. Scott Fitzgerald")

  
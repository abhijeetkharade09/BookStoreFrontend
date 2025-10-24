import mongoose from "mongoose";
// we define model for our data
// Till now we done: Database setup --> Schema -->Models


const bookSchema = mongoose.Schema({
    name:String,
    title:String,
    price:Number,
    category:String,
    image:String
})

const Book = mongoose.model("Book",bookSchema);
// here in , mongoose.model("Book",bookSchema) --> "Book" is a collection stored in database bookstore you can check or visit in MongoDB Atlas
// when flow of API link present in index.js file come to book.model.js then from collection: book it fetches the Data of added json file
export default Book;

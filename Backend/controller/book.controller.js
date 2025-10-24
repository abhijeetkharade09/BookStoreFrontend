import Book from "../model/book.model.js"
// after model, now we are defining controller
// used for controlling the status of output
export const getBook = async(req,res)=>{        
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
}








import mongoose from "mongoose";
//we define model for our data i.e Schema
const userSchema = mongoose.Schema({
    fullname: {
        type: String,  
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model("User",userSchema);
export default User;
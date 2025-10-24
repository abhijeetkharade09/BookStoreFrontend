import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";   

const app = express();

app.use(cors());  // cors is a Middleware 
// - Your frontend (React app) runs at:
// 👉 http://localhost:3000
// - Your backend (Express server) runs at:
// 👉 http://localhost:5000
// - Now, when your frontend tries to send a request to your backend using Axios,
//   the browser will block it by default — because they are on different ports (origins).
// - That’s where CORS comes in — it allows controlled communication between different origins.
app.use(express.json())

dotenv.config();

const PORT = process.env.PORT || 4000;
const URL = process.env.ATLASDB_URL; 

main()
    .then(() => {
        console.log('Connected to Mongo Atlas');
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
     await mongoose.connect(URL);
 }

app.get("/", (req, res) => {
  res.send("MERN Project!");
});

// defining routes: these routes are connected to database
app.use("/book",bookRoute); // bookRoute -->book.route.js-->book.controller.js-->book.model.js
app.use("/user",userRoute); // userRoute -->user.route.js-->user.controller.js-->user.model.js

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});

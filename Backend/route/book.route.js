import express from 'express';
import {getBook} from "../controller/book.controller.js"
// after controller, now we are defining routes
// after defining routes go to index.js file
const router = express.Router();

router.get("/", getBook);

export default router;
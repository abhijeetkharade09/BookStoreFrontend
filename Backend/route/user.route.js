import express from "express";
import {login, signup} from '../controller/user.controller.js'
// after controller, now we are defining routes
// after defining routes go to index.js file

const router = express.Router()

router.post('/signup',signup);
router.post('/login',login)

export default router;
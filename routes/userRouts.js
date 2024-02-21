import express from "express";
import { UpdateUser, createUser, getUserByI, getUsers } from "../controller/usercontroller.js";

const router = express.Router();

router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(getUserByI).put(UpdateUser)


export default router
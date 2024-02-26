import express from "express";
import { UpdateUser, createUser, getUserByI, getUsers, login } from "../controller/usercontroller.js";

const router = express.Router();

router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(getUserByI).put(UpdateUser)
router.route('/login').post(login)


export default router
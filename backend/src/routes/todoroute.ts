// import mongoose from "mongoose";
import Todo from "../models/Todo";

import bcrypt from "bcrypt"; // encrypt password
import Joi from "joi"; // validate data
import jwt from "jsonwebtoken"; 

import express  from "express";
const router = express.Router();

// todo routes

// add todo
router.get('/todos/list', async (req, res) => {
    const todos = await Todo.find().sort({date: -1});
    res.send(todos);
})


export default router;

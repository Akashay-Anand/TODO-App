import mongoose from "mongoose";
import Todo from "../models/Todo";

import bcrypt from "bcrypt"; // encrypt password
import Joi from "joi"; // validate data
import jwt from "jsonwebtoken"; 

import express  from "express";
const router = express.Router();

// middleware
import auth from "../middlewares/user-auth";

// todo routes

// Perform CRUD operations on TODO
// get todo
router.route('/todo/list').get(auth, async (req, res) => {
    const todos = await Todo.find().sort({date: -1});
    res.send(todos);
    
});

// add todo
router.route('/todo/list').post(auth, async (req, res) => {
    let todo = new Todo(req.body);
    
    try{
        todo = await todo.save()
        console.log("Saved successfully")
    }catch(err){
        console.log(err)
    }
    res.send(todo);
});

// update todo : create a new version of data; 
router.route('/todo/list/:id').put(auth, async (req, res) => {

    const todo = await Todo.findById(req.params.id);
    if(!todo) return res.status(404).send("Todo not found...");

    const updated_todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.send(updated_todo);
});

// togal between completed or not completed
router.route('/todo/list/:id').patch(auth, async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if(!todo) return res.status(404).send("Todo not found...");

    try{
        const updated_todo = await Todo.findByIdAndUpdate(req.params.id, {
            isCompleted : !todo.isCompleted,
        }, {new: true});
        res.send(updated_todo);
    }catch(err){
        if (err instanceof Error) {
            console.log(err.message);
            res.status(404).send(err.message);
        }
        else{
            // Handle cases where 'err' is not an Error (unknown type)
            console.log('An unknown error occurred:', err);
            res.status(500).send({ status: 'failed', message: 'An unknown error occurred' });
        }
        
    }

});

router.route('/todo/list/:id').delete(auth, async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if(!todo) return res.status(404).send("Todo not found...");

    // const todo = Todo.deleteOne({});
    // const todo = Todo.deleteMany({ })
    const deleted_todo = await Todo.findByIdAndDelete(req.params.id);
    res.send(deleted_todo);
});




export default router;

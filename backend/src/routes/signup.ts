import mongoose from "mongoose";
import User from "../models/User";

import bcrypt from "bcrypt"; // encrypt password
import Joi from "joi"; // validate data

import express  from "express";
const router = express.Router();

///////////////////////////////////////////////////////////////
// create route for Singup
router.post('/singup', async (req, res) => {

  // validation schema
    const validateUser = Joi.object({
      name: Joi.string().min(2).required(),
      email: Joi.string().min(3).max(200).required(),
      password: Joi.string().min(6).max(1000).required()
    });

    const {error} = validateUser.validate(req.body);
    if(error){
      console.log(error.details[0].message);
      return res.status(400).send(error.details[0].message);
    } 
    
    try{
      // check if email already exists (email should be unique)
      const user = await User.findOne({ email: req.body.email });
      if(user) return res.status(400).send({ status : 'failed', message: 'Email already exists' });
    
      // ??? validate this data before storing it
      const {name, email, password} = req.body;
    
      // create an object of user model
      const newUser = new User({name, email, password});

      // hash password
      const salt = await bcrypt.genSalt(13);
      newUser.password = await bcrypt.hash(newUser.password, salt)
        
    
      // save this object to user collection in database
      newUser.save();
      res.status(200).send("success : user created");

    }catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
        res.status(500).send({ status: 'failed', message: err.message });
      } else {
        // Handle cases where 'err' is not an Error (unknown type)
        console.log('An unknown error occurred:', err);
        res.status(500).send({ status: 'failed', message: 'An unknown error occurred' });
      }
    }

})
export default router;
import User from "../models/User";

import bcrypt from "bcrypt"; // encrypt password
import Joi from "joi"; // validate data
import jwt from "jsonwebtoken";

import express  from "express";
const router = express.Router();

router.post('/login', async (req, res) => {

    // validation schema
    const validateUser = Joi.object({
      email: Joi.string().min(3).max(200).required(),
      password: Joi.string().min(6).max(1000).required()
    });

    const {error} = validateUser.validate(req.body);
    if(error){
      console.log(error.details[0].message);
      // return res.status(400).send(error.details[0].message);
      return res.status(400).send({'message': "Hello Anand"});
    }

    try{
        let user = await User.findOne({email: req.body.email})
        
        // check if user exist or not
        if(!user) return res.status(400).send("email not found");

        // check if the password is correct
        const validpassword = await bcrypt.compare(
            req.body.password, user.password );
        
        if(!validpassword) return res.status(400).send("Invalid password");
        
        // create jwt token
        const KEY = process.env.SECRET_KEY;
        if(KEY){
            const token = jwt.sign({uid: user._id, name:user.name, email: user.email}, KEY);
            // send token to the client
            res.status(200).send({message: `Hello ${user.name}`, token: token, uid: user._id});
        }else{
            res.status(500).send({status: "failed", message: "Unable to create jwt token"});
        }
        // res.status(200).send("Hello " + user.name );
    }
    catch(err){
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
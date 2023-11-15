// import modules 
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import cors from 'cors';

// retrive port number
const port = process.env.PORT || 8080;

// body parser : so so that requests body data can be extrected in correct format
app.use(express.json());

// api access from different domains
app.use(cors());

// connect Database
import connectDB from './config/conect_mongo';
connectDB();


// mount router
import signupRoute from './routes/signup'
app.use(signupRoute);
import loginRoute from './routes/login'
app.use(loginRoute);
import todoRoute from './routes/todoroute'
app.use(todoRoute);



app.get('/', (req, res) => {
    res.send('Hello World Anand');
})


// make server live
app.listen(port,() => {
    console.log("server is live... ")
});
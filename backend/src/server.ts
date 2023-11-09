// import modules 
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();

// retrive port number
const port = process.env.PORT || 8080;

// body parser : so so that requests body data can be extrected in correct format
app.use(express.json());


// connect Database
import connectDB from './config/conect_mongo';
connectDB();


// mount router
import signupRoute from './routes/signup'
app.use(signupRoute);
import loginRoute from './routes/login'
app.use(loginRoute);


app.get('/', (req, res) => {
    res.send('Hello World Anand');
})


// make server live
app.listen(port,() => {
    console.log("server is live... ")
});
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();

// retrive port number
const port = process.env.PORT || 8080;

// connect Database
import connectDB from './config/conect_mongo';
connectDB();


// routes
app.get('/', (req, res) => {
    res.send('Hello World Anand');
})


// make server live
app.listen(port,() => {
    console.log("server is live... ")
});
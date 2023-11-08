import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();

// retrive port number
const port = process.env.PORT || 8080;

// body parser
app.use(express.json());


// connect Database
import connectDB from './config/conect_mongo';
connectDB();


// routes
import signupRoute from './routes/signup'
app.use(signupRoute);

app.get('/', (req, res) => {
    res.send('Hello World Anand');
})


// make server live
app.listen(port,() => {
    console.log("server is live... ")
});
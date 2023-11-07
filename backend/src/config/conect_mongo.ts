import mongoose, { connection } from "mongoose";

const db_link: string | undefined = process.env.DB_Link ;

if(!db_link){
    console.log("Db link url should not be empty define it first")
    process.exit(1);
}


const connectDB = () => {
    mongoose.connect(db_link)
    .then(() => {
        console.log("Database is connected to mongodb");
        const dbName = mongoose.connection.db.databaseName;
        console.log('Database name:', dbName);
    })
    .catch((err) => {console.log("Connection failed !!! " + err.message)});
} 

export default connectDB;


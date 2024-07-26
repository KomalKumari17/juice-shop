import mongoose from "mongoose";

const ConnectDb = () => {
    try{
        const connect =mongoose.connect("mongodb://127.0.0.1:27017/book");
    }
    catch(e){
        throw new Error("db connection failed")
    }
}
export default ConnectDb;

import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name:{type:String, required:true},
    contact:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
},{timestamps:true})

export default mongoose.model.User || mongoose.model("User",UserSchema)
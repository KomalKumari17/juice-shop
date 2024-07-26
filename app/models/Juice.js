import mongoose from "mongoose"
import Category from "./Category"

const JuiceSchema = new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    category:{type:mongoose.Schema.Types.ObjectId, required:true, ref:Category},
    price:{type:Number, required:true},
    cover_image:{type:String,required:true}
   
},{timestamps:true})

export default mongoose.models.Juice || mongoose.model("Juice",JuiceSchema)
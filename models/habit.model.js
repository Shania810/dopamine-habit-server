import {Schema,model} from 'mongoose'
const habitSchema = new Schema({
    title:{type:String,required,required:[true,'title is required'],trim: true,lowercase: true},
    description:{type:String,required:[true,'description is required'],trim:true,lowercase:true},
    user:{type:Schema.Types.ObjectId,ref:'User',required:true}
},{timestamps:true})
export default model('Habit',habitSchema)

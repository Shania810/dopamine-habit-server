import {Schema,model} from 'mongoose'
const habitSchema = new Schema({
    title:{type:String,required:[true,'title is required'],trim: true,lowercase: true},
    description:{type:String,required:[true,'description is required'],trim:true,lowercase:true},
    frequency:{type:String,lowercase:true},
    days_completed:{type:Number,default:0},
    user:{type:Schema.Types.ObjectId,ref:'User',required:true}
},{timestamps:true})
export default model('Habit',habitSchema)

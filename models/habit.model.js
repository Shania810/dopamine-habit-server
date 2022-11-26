import {Schema,model} from 'mongoose'
const habitSchema = new Schema({
    description:{type:String,required:[true,'description is required'],trim:true,lowercase:true},
    user:{type:Schema.Types.ObjectId,ref:'User',required:true}
},{timestamps:true})
export default model('Habit',habitSchema)

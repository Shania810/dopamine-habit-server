import {Schema,model} from 'mongoose'
const analysisSchema = new Schema({
    habits:[{type:Schema.Types.ObjectId,ref:'Habit'}],
    duration_of_analysis:{type:Number,default:7},
    created_at:{type:Date},
    user:{type:Schema.Types.ObjectId,ref:'User',required: true}
},{timestamps:true})
export default model('Analysis',analysisSchema)
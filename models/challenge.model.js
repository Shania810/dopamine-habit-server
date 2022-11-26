import {Schema,model} from 'mongoose'
const challengeSchema = new Schema({
    description:{type:String,required:true,trim:true,lowercase:true},
    duration_of_challenge:{type:Number,required:true,trim:true}, 
},{timestamps:true})
export default model('Challenge',challengeSchema)
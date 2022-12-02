import {Schema,model} from 'mongoose'
const challengeSchema = new Schema({
    challenge:{type:String},
    description:{type:String,required:true,trim:true,lowercase:true},
    duration_of_challenge:{type:String,required:true,trim:true},
    frequency_recommended:{type:String,lowercase:true} 
},{timestamps:true})
export default model('Challenge',challengeSchema)
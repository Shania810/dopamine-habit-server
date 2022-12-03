import {Schema,model} from 'mongoose'
const userSchema = new Schema({
    username:{type:String,required:[true,'username is required'],unique:true,lowercase:true,trim:true},
    email:{type:String,required:[true,'email is required'],unique:true,lowercase:true,trim:true,match:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/},
    imageURL:{type:String,trim:true,default:'https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png'},
    passwordHash:{type:String,required:[true,'password is required']}
},{timestamps:true}
)
export default model('User',userSchema)

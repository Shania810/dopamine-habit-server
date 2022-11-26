import mongoose from "mongoose";
const connectDB = async()=>{
    const MONGO_URI = process.env.MONGO_URI
    try {
        const connection = await mongoose.connect(MONGO_URI)
        console.log(`Connected DB with ${connection.connections[0].name}`)
    } catch (error) {
        console.log('Error to connect DB',error)
    }
}
export default connectDB
import { Schema, model } from 'mongoose'

const habitSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'title is required'],
      trim: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, 'description is required'],
      trim: true,
      lowercase: true,
    },
    completed:{type:Boolean,default: null },
    frequency: { type: String, lowercase: true },
    days_completed: { type: Number, default: 0, max:[7,'must be at least 7']},
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
)
habitSchema.set('toObject',{virtuals: true})
export default model('Habit', habitSchema)

import { Schema, model } from 'mongoose'

const analysisSchema = new Schema(
  {
    habits: [{ type: Schema.Types.ObjectId, ref: 'Habit' }],
    duration: { type: Number, default: 1,max: [7,'must be least 7'] },
    created_at: { type: Date },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
)
analysisSchema.set('toObject',{virtuals: true})
export default model('Analysis', analysisSchema)

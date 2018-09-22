import mongoose, { Schema } from 'mongoose';

const BPRecordShema = new Schema({
  lowPressure: {
    type: Number,
    required: true,
    min: [30, 'Invalid value (too low)'],
    max: [300, 'Invalid value (too high)'],
  },
  highPressure: {
    type: Number,
    required: true,
    min: [30, 'Invalid value (too low)'],
    max: [300, 'Invalid value (too high)'],
  },
  createdTime: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true, // create fields createdAt and updatedAt
});

export default mongoose.model('BPRecord', BPRecordShema);

import mongoose, { Schema } from 'mongoose';

const BPRecordShema = new Schema({
  lowPressure: {
    type: Number,
    required: true,
    min: [30, 'Invalid value (too low)'],
    max: [300, 'Invalid value (too high)']
  },
  highPressure: {
    type: String,
    required: true,
    min: [30, 'Invalid value (too low)'],
    max: [300, 'Invalid value (too high)']
  },
  createdDate: {
    type: Date,
    required: [true, "Created date is required."],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, { timestamps: true });

export default mongoose.model('BPRecord', BPRecordShema);
import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  applicationsCreated: [
    {
      title: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      companyName: {
        type: String,
        required: true,
      },
      compensation: {
        type: String,
        required: true,
      },
      jobDescription: {
        type: String,
        required: true,
      },
      additionalInfo: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

export default mongoose.models.Profile ||
  mongoose.model('Profile', ProfileSchema);

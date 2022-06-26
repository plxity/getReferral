import mongoose from 'mongoose';

const ResponseSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
  },
  applicationId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  responses: [
    {
      firstName: {
        type: String,
        default: null,
      },
      lastName: {
        type: String,
        default: null,
      },
      location: {
        city: {
          type: String,
          default: null,
        },
      },
      email: {
        type: String,
        required: true,
      },
      skills: {
        type: [String],
        required: true,
      },
      experience: [
        {
          company: {
            type: String,
            required: true,
          },
          current: {
            type: Boolean,
            default: false,
          },
          startDate: {
            type: Date,
          },
          endDate: {
            type: Date,
          },
        },
      ],
      website: {
        type: String,
        default: null,
      },
      peerlistUserName: {
        type: String,
        required: true,
      },
    },
  ],
});

export default mongoose.models.Response ||
  mongoose.model('Response', ResponseSchema);

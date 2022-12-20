const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Register',
        required: true,
      },
    packageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'travelpackage',
      required: true,
    },

    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Commentsection', commentSchema);

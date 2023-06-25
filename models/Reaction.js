const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionID: {_id: mongoose.Schema.Types.ObjectId },
  createdAt: { type: Date, default: Date.now },
  username: { type: String, required: true, trim: true },
  reactionBody: { type: String, minlength: 1, maxlength: 280 , required: true, trim: true }
},
{
  toJSON: {
    //Add a `virtuals` property and set it's value to true
    virtuals: true,
  },
  id: false,
}
);

// Initialize the Thoughts model

module.exports = reactionSchema;
const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, minlength: 1, maxlength: 280 , required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
  username: { type: String, required: true, trim: true },
  reactions:
},
{
  toJSON: {
    //Add a `virtuals` property and set it's value to true
    virtuals: true,
  },
  id: false,
}
);

// Create a virtual property `friendCount` that records the number of friends
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
   // return `${this.reactions.length}`;

  });

// Initialize the Thoughts model

const Thought = model('thought', thoughtSchema);

const handleError = (err) => console.error(err);
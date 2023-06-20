const mongoose = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, minlength: 1, maxlength: 280 , required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
  username: { type: String, required: true, trim: true },
  reactions: [reactionSchema]
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

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought

//const handleError = (err) => console.error(err);
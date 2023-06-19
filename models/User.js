const mongoose = require('mongoose');
require('mongoose-type-email');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true },
  email: { type: mongoose.SchemaTypes.Email, required: true, trim: true },
  lastAccessed: { type: Date, default: Date.now },
  thoughts: {type: mongoose.Schema.Types.ObjectId, ref: 'Thought'},
  friends: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
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
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
   // return `${this.friends.length}`;

  });

// Initialize the User model

const User = model('user', userSchema);

module.exports = User

//const handleError = (err) => console.error(err);







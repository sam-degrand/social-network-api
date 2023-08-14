const {Schema, model} = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  });

  // Create a virtual property 'friendCount'
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });
  
  const User = model('User', userSchema);
  
  module.exports = User;
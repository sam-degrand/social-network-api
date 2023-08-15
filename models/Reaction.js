const {Schema, model, Types} = require("mongoose");

const reactionSchema = new Schema({
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  }
});

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;

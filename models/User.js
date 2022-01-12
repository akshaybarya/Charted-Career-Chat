const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  isCalled: {
    type: Boolean,
    required: true,
  },
});

module.exports = User = Mongoose.model("user", UserSchema);

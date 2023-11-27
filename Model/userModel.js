const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "please enter your name:"],
  },
  email: {
    type: String,
    require: [true, "enter your email"],
    validate: [validator.isEmail, "please enter the email"],
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    require: [true, "please enter your password"],
    minlength: 8,
  },
  confirmpassword: {
    type: String,
    require: [true, "please confirm your password"],
    validate: {
      validator: function (val) {
        return val == this.password;
      },
      message: "password & confirm passowrd does not match",
    },
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmpassword = undefined;;
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;

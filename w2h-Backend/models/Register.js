const mongoose = require("mongoose");
const crypto = require("crypto");

const Schema = mongoose.Schema;

const RegSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Num: {
    type: Number,
    required: true,
  },
  reward: {
    type: Number,
  },
  role: {
    type: String,
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

RegSchema.methods.getResetPasswordToken = function () {
  //generating the token
  const resetToken = crypto.randomBytes(20).toString("hex");

  //Hasing and adding to user Schema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  return resetToken;
};

const Register = mongoose.model("Register", RegSchema);

module.exports = Register;

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var User = new Schema({
  Email: String,
  Password: String,
});

const UserSchema = mongoose.model("User", User);
module.exports = UserSchema;

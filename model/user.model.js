const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: false,
    },
    surname: {
      type: Schema.Types.String,
      required: false,
    },
    age: {
      type: Schema.Types.Number,
      required: false,
    },
    password: {
      type: Schema.Types.String,
      required: false,
    },
    salary: {
      type: Schema.Types.String,
      required: false,
    },
    email: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    birthDate: {
      type: Schema.Types.Date,
      requried: false,
    },
  },
  { minimize: true, timestamps: true, autoIndex: true }
);

const User = mongoose.model("User", userSchema, "user");

module.exports = User;

const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "the name is required!!!"],
    },
    email: {
        type: String,
        required: [true, "the name is required!!!"],
        validate: [validator.isEmail, "email invalid!!!"],
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, "the password is required!!!"],
        minlength: 8,
    },
    confirmPassword: {
        type: String,
        required: [true, "the password is required!!!"],
        minlength: 8,
        validate: function (cPass) {
            return cPass === this.password;
        },
        message: "the password are not the same!!!",
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    dateOfLastPasswordUpdate: {
        type: Date,
        default: Date.now(),
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
})

const User = mongoose.model("user", userSchema)
module.export = User; 
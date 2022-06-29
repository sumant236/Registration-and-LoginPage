const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    name: {type: String, required: true},
    phoneNo: {type: Number, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

const UserData = new mongoose.model("data", dataSchema);
module.exports = UserData
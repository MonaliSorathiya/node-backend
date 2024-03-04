const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String
    },
    mobileno: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }

}, {
    timestamps: true
});



module.exports = mongoose.model('userDetails', UserSchema)




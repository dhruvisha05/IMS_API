var mongoose = require('mongoose');

var adminSchema = new mongoose.Schema ({
    name : {
        type : String,
    },
    email : {
        type : String,
    },
    password : {
        type : String,
    },
    role : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
    },
    branch : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "branch"
    },
    contact_number : {
        type : Number,
    },
    image : {
        type : String
    }
})

module.exports = mongoose.model('admin', adminSchema);

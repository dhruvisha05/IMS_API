var mongoose = require('mongoose');

var StatusSchema = new mongoose.Schema ({
    status_name : {
        type : String,
    },
})
module.exports = mongoose.model('status', StatusSchema);

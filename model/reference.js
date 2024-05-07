var mongoose = require('mongoose');

var ReferenceSchema = new mongoose.Schema ({
    reference_name : {
        type : String,
    },
})
module.exports = mongoose.model('reference', ReferenceSchema);

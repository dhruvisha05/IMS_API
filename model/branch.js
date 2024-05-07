var mongoose = require('mongoose');

var BranchSchema = new mongoose.Schema ({
    branch_name : {
        type : String,
    },
})
module.exports = mongoose.model('branch', BranchSchema);

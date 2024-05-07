var mongoose = require('mongoose');

var FollowupSchema = new mongoose.Schema ({
    reason : {
        type : String,
    },
    date : {
        type : String,
    },
    by : {
        type : String,
    },
    inquiry_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "inquiry"
    },
})
module.exports = mongoose.model('followup', FollowupSchema);

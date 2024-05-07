var mongoose = require('mongoose');
const status = require('./status');

var InquirySchema = new mongoose.Schema ({
    branch_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "branch"
    },
    name : {
        type : String,
    },
    contact : {
        type : String,
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course"
    },
    joindate : {
        type : String,
    },
    reference_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "reference"
    },
    reference_by:{
        type : String,
    },
    inquiry_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"admin"
    },
    status_id :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "status"
    },
    status_date:{
        type:String,
    },
    inquiry_date :{
        type:String,
    }
})
module.exports = mongoose.model('inquiry', InquirySchema);

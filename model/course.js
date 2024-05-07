var mongoose = require('mongoose');

var CourseSchema = new mongoose.Schema ({
    course_name : {
        type : String,
    },
})
module.exports = mongoose.model('course', CourseSchema);

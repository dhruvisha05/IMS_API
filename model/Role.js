var mongoose = require('mongoose');

var RoleSchema = new mongoose.Schema ({
    role_name : {
        type : String,
    },
  
})
module.exports = mongoose.model('Role', RoleSchema);

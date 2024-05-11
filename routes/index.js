var express = require('express');
var adminrouter = express.Router();
var admin=require('../controller/admin');
var role = require('../controller/role');
var branch = require('../controller/branch');
var status = require('../controller/status');
var reference = require('../controller/reference');
var followup = require('../controller/followup');
var inquiry = require('../controller/inquiry');
var course = require('../controller/course');
var auth = require('../middleware/auth')

const multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req,file,cd){
        cd(null,'public/images')
    },
    filename:function(req,file,cd){
        cd(null,file.originalname)
    }
}) 

const upload = multer({ storage: storage })

//admin
adminrouter.post('/register',upload.single('image'),admin.register);
adminrouter.get('/get_admindata',auth.check_token,admin.get_admindata);
adminrouter.post('/admin_login',admin.login);
adminrouter.get('/admin_logout',admin.logout);
adminrouter.post('/admin_delete/:id',auth.check_token,admin.admin_delete);
adminrouter.post('/admin_update/:id',auth.check_token,admin.admin_update);
adminrouter.get('/admin_update/:id',auth.check_token,admin.admin_update);
adminrouter.get('/admin_search',auth.check_token,admin.admin_search);

// baranch
adminrouter.post('/add_branch',auth.check_token,branch.add_branch);
adminrouter.get('/get_branchdata',auth.check_token,branch.get_branchdata);
adminrouter.post('/branch_delete/:id',auth.check_token,branch.branch_delete);
adminrouter.post('/branch_update/:id',auth.check_token,branch.branch_update);
adminrouter.get('/branch_update/:id',auth.check_token,branch.branch_update);
adminrouter.get('/branch_search',auth.check_token,branch.branch_search);


// role
adminrouter.post('/add_role',auth.check_token,role.add_role);
adminrouter.get('/get_roledata',auth.check_token,role.get_roledata);
adminrouter.post('/role_delete/:id',auth.check_token,role.role_delete);
adminrouter.post('/role_update/:id',auth.check_token,role.role_update);
adminrouter.get('/role_update/:id',auth.check_token,role.role_update);
adminrouter.get('/role_search',auth.check_token,role.role_search);


//status
adminrouter.post('/add_status',auth.check_token,status.add_status);
adminrouter.get('/get_statusdata',auth.check_token,status.get_statusdata);
adminrouter.post('/status_delete/:id',auth.check_token,status.status_delete);
adminrouter.post('/status_update/:id',auth.check_token,status.status_update);
adminrouter.get('/status_update/:id',auth.check_token,status.status_update);
adminrouter.get('/status_search',auth.check_token,status.status_search);

//course
adminrouter.post('/add_course',auth.check_token,course.add_course);
adminrouter.get('/get_coursedata',auth.check_token,course.get_coursedata);
adminrouter.post('/course_delete/:id',auth.check_token,course.course_delete);
adminrouter.post('/course_update/:id',auth.check_token,course.course_update);
adminrouter.get('/course_update/:id',auth.check_token,course.course_update);
adminrouter.get('/course_search',auth.check_token,course.course_search);

//reference
adminrouter.post('/add_reference',auth.check_token,reference.add_reference);
adminrouter.get('/get_referencedata',auth.check_token,reference.get_referencedata);
adminrouter.post('/reference_delete/:id',auth.check_token,reference.reference_delete);
adminrouter.post('/reference_update/:id',auth.check_token,reference.reference_update);
adminrouter.get('/reference_update/:id',auth.check_token,reference.reference_update);
adminrouter.get('/reference_search',auth.check_token,reference.reference_search);

//Followup
adminrouter.post('/add_followup',auth.check_token,followup.add_followup);
adminrouter.get('/get_followupdata',auth.check_token,followup.get_followupdata);
adminrouter.post('/followup_delete/:id',auth.check_token,followup.followup_delete);
adminrouter.post('/followup_update/:id',auth.check_token,followup.followup_update);
adminrouter.get('/followup_update/:id',auth.check_token,followup.followup_update);
adminrouter.get('/followup_search',auth.check_token,followup.followup_search);

//inquiry
adminrouter.post('/add_inquiry',auth.check_token,inquiry.add_inquiry);
adminrouter.get('/get_inquirydata',auth.check_token,inquiry.get_inquirydata);
adminrouter.post('/inquiry_delete/:id',auth.check_token,inquiry.inquiry_delete);
adminrouter.post('/inquiry_update/:id',auth.check_token,inquiry.inquiry_update);
adminrouter.get('/inquiry_update/:id',auth.check_token,inquiry.inquiry_update);
adminrouter.get('/inquiry_search',auth.check_token,inquiry.inquiry_search);

module.exports = adminrouter;

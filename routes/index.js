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
adminrouter.get('/get_admindata',admin.get_admindata);
adminrouter.post('/admin_login',admin.login);
adminrouter.get('/admin_logout',admin.logout);
adminrouter.post('/admin_delete/:id',admin.admin_delete);
adminrouter.post('/admin_update/:id',admin.admin_update);
adminrouter.get('/admin_update/:id',admin.admin_update);
adminrouter.get('/admin_search',admin.admin_search);

// baranch
adminrouter.post('/add_branch',branch.add_branch);
adminrouter.get('/get_branchdata',branch.get_branchdata);
adminrouter.post('/branch_delete/:id',branch.branch_delete);
adminrouter.post('/branch_update/:id',branch.branch_update);
adminrouter.get('/branch_update/:id',branch.branch_update);
adminrouter.get('/branch_search',branch.branch_search);


// role
adminrouter.post('/add_role',role.add_role);
adminrouter.get('/get_roledata',role.get_roledata);
adminrouter.post('/role_delete/:id',role.role_delete);
adminrouter.post('/role_update/:id',role.role_update);
adminrouter.get('/role_update/:id',role.role_update);
adminrouter.get('/role_search',role.role_search);


//status
adminrouter.post('/add_status',status.add_status);
adminrouter.get('/get_statusdata',status.get_statusdata);
adminrouter.post('/status_delete/:id',status.status_delete);
adminrouter.post('/status_update/:id',status.status_update);
adminrouter.get('/status_update/:id',status.status_update);
adminrouter.get('/status_search',status.status_search);

//course
adminrouter.post('/add_course',course.add_course);
adminrouter.get('/get_coursedata',course.get_coursedata);
adminrouter.post('/course_delete/:id',course.course_delete);
adminrouter.post('/course_update/:id',course.course_update);
adminrouter.get('/course_update/:id',course.course_update);
adminrouter.get('/course_search',course.course_search);

//reference
adminrouter.post('/add_reference',reference.add_reference);
adminrouter.get('/get_referencedata',reference.get_referencedata);
adminrouter.post('/reference_delete/:id',reference.reference_delete);
adminrouter.post('/reference_update/:id',reference.reference_update);
adminrouter.get('/reference_update/:id',reference.reference_update);
adminrouter.get('/reference_search',reference.reference_search);

//Followup
adminrouter.post('/add_followup',followup.add_followup);
adminrouter.get('/get_followupdata',followup.get_followupdata);
adminrouter.post('/followup_delete/:id',followup.followup_delete);
adminrouter.post('/followup_update/:id',followup.followup_update);
adminrouter.get('/followup_update/:id',followup.followup_update);
adminrouter.get('/followup_search',followup.followup_search);

//inquiry
adminrouter.post('/add_inquiry',inquiry.add_inquiry);
adminrouter.get('/get_inquirydata',inquiry.get_inquirydata);
adminrouter.post('/inquiry_delete/:id',inquiry.inquiry_delete);
adminrouter.post('/inquiry_update/:id',inquiry.inquiry_update);
adminrouter.get('/inquiry_update/:id',inquiry.inquiry_update);
adminrouter.get('/inquiry_search',inquiry.inquiry_search);



module.exports = adminrouter;

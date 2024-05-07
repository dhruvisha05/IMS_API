var inquiry = require("../model/inquiry");
const storage = require('node-persist');
storage.init( /* options ... */);
const bcrypt = require('bcrypt');


//inquiry add
exports.add_inquiry = async (req, res) => {
    var data = await inquiry.create(req.body);
    res.status(200).json({
        status: "followup data add",
        data
    })
}

exports.get_inquirydata = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var data = await inquiry.find().populate("branch_id").populate("course_id").populate("reference_id").populate({
            path: 'inquiry_by',
            populate: [{ path: 'role' }, { path: 'branch' }]
        }).populate("status_id");
        res.status(200).json({
            data
        })
    } else {
        res.status(200).json({
            status: "only admin can delete student"
        })
    }
}


//inquiry delete
exports.inquiry_delete = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var id = req.params.id;
        var data = await inquiry.findByIdAndDelete(id, req.body);
        res.status(200).json({
            status: "inquiry delete"
        })
    } else {
        res.status(200).json({
            status: "only admin can delete student"
        })
    }
}

//inquiry update
exports.inquiry_update = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var id = req.params.id;
        var data = await inquiry.findByIdAndUpdate(id, req.body).populate("branch_id").populate("course_id").populate("reference_id").populate({
            path: 'inquiry_by',
            populate: [{ path: 'role' }, { path: 'branch' }]
        }
        ).populate("status_id");
        res.status(200).json({
            data,
            status: "inquiry update"
        })
    } else {
        res.stauts(200).json({
            stauts: "only admin can update student"
        })
    }
}

//inquiry find
exports.inquiry_uodate = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var id = req.params.id;
        var data = await inquiry.findById(id).populate("branch_id").populate("course_id").populate("reference_id").populate({
            path: 'inquiry_by',
            populate: [{ path: 'role' }, { path: 'branch' }]
        }
        ).populate("status_id");
        res.status(200).json({
            data,
            status: "inquiry update"
        })
    } else {
        res.stauts(200).json({
            stauts: "only admin can update student"
        })
    }
}


//inquiry searching 
exports.inquiry_search = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var search = req.query;
        var data = await inquiry.find(search);
        res.status(200).json({
            status: "data",
            data
        })
    } else {
        res.stauts(200).json({
            stauts: "only admin can search admin"
        })
    }
}

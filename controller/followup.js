var followup = require("../model/followup");
const storage = require('node-persist');
storage.init( /* options ... */);
const bcrypt = require('bcrypt');


//followup add
exports.add_followup = async (req,res) => {
    var data =  await followup.create(req.body);
    res.status(200).json({
        status:"followup data add",
        data
    })
}

exports.get_followupdata = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if(admin_id)
    {
        var data = await followup.find().populate({
            path: 'inquiry_id',
            populate: [{ path: 'branch_id' }, { path: 'course_id' },{ path: 'reference_id' },{path :'inquiry_by'},{path : 'status_id'}]
        });
        res.status(200).json({
            data
    })
    }else{
        res.status(200).json({
            status:"only admin can delete student"
        })
    }
}


//followup delete
exports.followup_delete = async (req,res) =>{
    const admin_id = await storage.getItem('login-admin');
    if(admin_id)
    {
        var id = req.params.id;
        var data = await followup.findByIdAndDelete(id, req.body);
        res.status(200).json({
            status:"followup delete"
        })
    }else{
        res.status(200).json({
            status:"only admin can delete student"
        })
    }
}

//followup update
exports.followup_update = async (req,res) => {
    const admin_id = await storage.getItem('login-admin');
    if(admin_id)
    {
        var id = req.params.id;
        var data = await followup.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            data,
            status: "followup update"
        })
    }else{
        res.stauts(200).json({
            stauts:"only admin can update student"
        })
    }
}

exports.followup_update = async (req,res) => {
    const admin_id = await storage.getItem('login-admin');
    if(admin_id)
    {
        var id = req.params.id;
        var data = await followup.findById(id);
        res.status(200).json({
            data,
            status: "followup update"
        })
    }else{
        res.stauts(200).json({
            stauts:"only admin can update student"
        })
    }
}

//followup searching 
exports.followup_search = async (req,res) => {
    const admin_id = await storage.getItem('login-admin');
    if(admin_id)
    {
        var search = req.query;
        var data = await followup.find(search);
        res.status(200).json({
            status: "data",
            data
        })
    }else{
        res.stauts(200).json({
            stauts:"only admin can search admin"
        })
    }
}

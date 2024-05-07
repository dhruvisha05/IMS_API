var course = require("../model/course");
const storage = require('node-persist');
storage.init( /* options ... */);
const bcrypt = require('bcrypt');


//course add
exports.add_course = async (req,res) => {
    var data =  await course.create(req.body);
    res.status(200).json({
        status:"course data add",
        data
    })
}

exports.get_coursedata = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if(admin_id)
    {
        var data = await course.find();
        res.status(200).json({
            data
    })
    }else{
        res.status(200).json({
            status:"only course can delete student"
        })
    }
}


//course delete
exports.course_delete = async (req,res) =>{
    const admin_id = await storage.getItem('login-admin');
    if(admin_id)
    {
        var id = req.params.id;
        var data = await course.findByIdAndDelete(id, req.body);
        res.status(200).json({
            status:"course delete"
        })
    }else{
        res.status(200).json({
            status:"only admin can delete student"
        })
    }
}

//course update
exports.course_update = async (req,res) => {
    const admin_id = await storage.getItem('login-admin');
    if(admin_id)
    {
        var id = req.params.id;
        var data = await course.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            data,
            status: "course update"
        })
    }else{
        res.stauts(200).json({
            stauts:"only admin can update student"
        })
    }
}

exports.course_update = async (req,res) => {
    const admin_id = await storage.getItem('login-admin');
    if(admin_id)
    {
        var id = req.params.id;
        var data = await course.findById(id);
        res.status(200).json({
            data,
            status: "course update"
        })
    }else{
        res.stauts(200).json({
            stauts:"only admin can update student"
        })
    }
}

//course searching 
exports.course_search = async (req,res) => {
    const admin_id = await storage.getItem('login-admin');
    if(admin_id)
    {
        var search = req.query;
        var data = await course.find(search);
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

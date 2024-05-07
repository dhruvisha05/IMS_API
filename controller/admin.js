var admin = require("../model/adminmodel");
const storage = require('node-persist');
storage.init( /* options ... */);
const bcrypt = require('bcrypt');


//admin register
exports.register = async (req,res) => {
    var b_pass = await bcrypt.hash(req.body.password, 10);
    req.body.password = b_pass;
    req.body.image=req.file.originalname;

    var data =  await admin.create(req.body);
    res.status(200).json({
        status:"admin data register",
        data
    })
}

exports.get_admindata = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if(admin_id)
    {
        var data = await admin.find().populate("role").populate("branch");
        res.status(200).json({
            data
    })
    }else{
        res.status(200).json({
            status:"only admin can delete student"
        })
    }
}

//admin login
exports.login = async (req, res) => {
    var admin_status = await storage.getItem('login-admin');
    if (admin_status == undefined) {
        var data = await admin.find({ "email": req.body.email });
        if (data.length == 1) {
            bcrypt.compare(req.body.password, data[0].password, async function (err, result) {
                if (result == true) {
                    await storage.setItem('login-admin', data[0].id);
                    res.status(200).json({
                        status: "login success",
                    });
                } else {
                    res.status(200).json({
                        status: "check your email and password1",
                    });
                }
            });
        }else {
            res.status(200).json({
                status: "check your email and password2",
            });
        }
    } else {
        res.status(200).json({
            status: "admin is already login"
        });
    }
};

//admin logout
exports.logout = async (req, res) => {
    await storage.clear();
    res.status(200).json({
        status: "admin logout",
    })
}

//admin delete
exports.admin_delete = async (req,res) =>{
    const admin_id = await storage.getItem('login-admin');
    if(admin_id)
    {
        var id = req.params.id;
        var data = await admin.findByIdAndDelete(id, req.body);
        res.status(200).json({
            status:"admin delete"
        })
    }else{
        res.status(200).json({
            status:"only admin can delete student"
        })
    }
}

//admin update
exports.admin_update = async (req,res) => {
    const admin_id = await storage.getItem('login-admin');
    if(admin_id)
    {
        var id = req.params.id;
        var data = await admin.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            data,
            status: "admin update"
        })
    }else{
        res.stauts(200).json({
            stauts:"only admin can update student"
        })
    }
}

//admin update
exports.admin_update = async (req,res) => {
    const admin_id = await storage.getItem('login-admin');
    if(admin_id)
    {
        var id = req.params.id;
        var data = await admin.findById(id);
        res.status(200).json({
            data,
            status: "admin update"
        })
    }else{
        res.stauts(200).json({
            stauts:"only admin can update student"
        })
    }
}

//admin searching 
exports.admin_search = async (req,res) => {
    const admin_id = await storage.getItem('login-admin');
    if(admin_id)
    {
        var search = req.query;
        var data = await admin.find(search);
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

var role = require('../model/Role')
const storage = require('node-persist');
storage.init( /* options ... */);

//add role
exports.add_role = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    var role_data = await role.find({ "role_name": req.body.role_name });
    if (role_data.length == 1) {
        res.status(200).json({
            status: "role is already Exist",
            data
        })
    } else {
        if (admin_id) {
            var data = await role.create(req.body);
            res.status(200).json({
                status: "Role added",
                data
            })
        } else {
            res.status(200).json({
                status: "only admin can add role"
            })
        }
    }
}

//get role
exports.get_roledata = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var data = await role.find();
        res.status(200).json({
            data
        })
    } else {
        res.status(200).json({
            status: "only admin can add role"
        })
    }
}

//branch delete
exports.role_delete = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var id = req.params.id;
        var data = await role.findByIdAndDelete(id, req.body);
        res.status(200).json({
            status: "role delete"
        })
    } else {
        res.status(200).json({
            status: "only admin can delete student"
        })
    }
}

//role update
exports.role_update = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    var role_data = await role.find({ "role_name": req.body.role_name });
    if (role_data.length == 1) {
        res.status(200).json({
            status: "role is already Exist",
            data
        })
    } else {
        if (admin_id) {
            var id = req.params.id;
            var data = await role.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                data,
                status: "role upadte"
            })
        } else {
            res.stauts(200).json({
                stauts: "only admin can update student"
            })
        }
    }
}

exports.role_update = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var id = req.params.id;
        var data = await role.findById(id);
        res.status(200).json({
            data,
            status: "role upadte"
        })
    } else {
        res.stauts(200).json({
            stauts: "only admin can update student"
        })
    }
}

//role searching 
exports.role_search = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var search = req.query;
        var data = await role.find(search);
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
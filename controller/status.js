var status = require('../model/status');
const storage = require('node-persist');
storage.init( /* options ... */);

//status register
exports.add_status = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    var status_data = await status.find({ "status_name": req.body.status_name });
    if (status_data.length == 1) {
        res.status(200).json({
            status: "status is already Exist",
            data
        })
    } else {
        if (admin_id) {
            var data = await status.create(req.body);
            res.status(200).json({
                status: "admin data register",
                data
            })
        } else {
            res.status(200).json({
                status: "only admin can add status"
            })
        }
    }
}

//status get
exports.get_statusdata = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var data = await status.find();
        res.status(200).json({
            data
        })
    } else {
        res.status(200).json({
            status: "only admin can get status"
        })
    }
}

//status delete
exports.status_delete = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var id = req.params.id;
        var data = await status.findByIdAndDelete(id, req.body);
        res.status(200).json({
            status: "status delete"
        })
    } else {
        res.status(200).json({
            status: "only admin can delete status"
        })
    }
}

//status update
exports.status_update = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    var status_data = await status.find({ "status_name": req.body.status_name });
    if (status_data.length == 1) {
        res.status(200).json({
            status: "status is already Exist",
            data
        })
    } else {
        if (admin_id) {
            var id = req.params.id;
            var data = await status.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                data,
                status: "status upadte"

            })
        } else {
            res.stauts(200).json({
                stauts: "only admin can update status"
            })
        }
    }
}

exports.status_update = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var id = req.params.id;
        var data = await status.findById(id);
        res.status(200).json({
            data,
            status: "status upadte"

        })
    } else {
        res.stauts(200).json({
            stauts: "only admin can update status"
        })
    }
}

//status searching 
exports.status_search = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var search = req.query;
        var data = await status.find(search);
        res.status(200).json({
            status: "data",
            data
        })
    } else {
        res.stauts(200).json({
            stauts: "only admin can search status"
        })
    }
}
var branch = require('../model/branch')
const storage = require('node-persist');
storage.init( /* options ... */);

//add branch
exports.add_branch = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    var branch_data = await branch.find({ "branch_name": req.body.branch_name });
    console.log(branch_data)
    if (branch_data.length == 1) {
        res.status(200).json({
            status: "branch is already Exist",
            data
        })
    } else {
        if (admin_id) {
            var data = await branch.create(req.body);
            res.status(200).json({
                status: "branch added",
                data
            })
        } else {
            res.status(200).json({
                status: "only admin can add branch"
            })
        }
    }

}

//get branch
exports.get_branchdata = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var data = await branch.find();
        res.status(200).json({
            data
        })
    } else {
        res.status(200).json({
            status: "only admin can get branch"
        })
    }
}

//branch delete
exports.branch_delete = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var id = req.params.id;
        var data = await branch.findByIdAndDelete(id, req.body);
        res.status(200).json({
            status: "branch delete"
        })
    } else {
        res.status(200).json({
            status: "only admin can delete student"
        })
    }
}

//branch update
exports.branch_update = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    var branch_data = await branch.find({ "branch_name": req.body.branch_name });
    console.log(branch_data);
    if (branch_data.length == 1) {
        res.status(200).json({
            status: "branch is already Exist",
            data
        })
    } else {
        if (admin_id) {
            var id = req.params.id;
            var data = await branch.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                data,
                status: "branch upadte"
            })
        } else {
            res.stauts(200).json({
                stauts: "only admin can update student"
            })
        }
    }
}

exports.branch_update = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var id = req.params.id;
        var data = await branch.findById(id);
        res.status(200).json({
            data,
            status: "branch upadte"
        })
    } else {
        res.stauts(200).json({
            stauts: "only admin can update student"
        })
    }
}

//branch searching 
exports.branch_search = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var search = req.query;
        var data = await branch.find(search);
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

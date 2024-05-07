var reference = require('../model/reference');
const storage = require('node-persist');
storage.init( /* options ... */);

//reference add
exports.add_reference = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var data = await reference.create(req.body);
        res.status(200).json({
            status: "reference data added",
            data
        })
    } else {
        res.status(200).json({
            status: "only admin can add reference"
        })
    }
}

//reference get
exports.get_referencedata = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var data = await reference.find();
        res.status(200).json({
            data
        })
    } else {
        res.status(200).json({
            status: "only admin can get status"
        })
    }
}

//reference delete
exports.reference_delete = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var id = req.params.id;
        var data = await reference.findByIdAndDelete(id, req.body);
        res.status(200).json({
            status: "reference delete"
        })
    } else {
        res.status(200).json({
            status: "only admin can delete reference"
        })
    }
}

//reference update
exports.reference_update = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var id = req.params.id;
        var data = await reference.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            data,
            status: "reference upadte"

        })
    } else {
        res.stauts(200).json({
            stauts: "only admin can update status"
        })
    }
}

exports.reference_update = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var id = req.params.id;
        var data = await reference.findById(id);
        res.status(200).json({
            data,
            status: "reference upadte"

        })
    } else {
        res.stauts(200).json({
            stauts: "only admin can update status"
        })
    }
}

//reference searching 
exports.reference_search = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var search = req.query;
        var data = await reference.find(search);
        res.status(200).json({
            status: "data",
            data
        })
    } else {
        res.stauts(200).json({
            stauts: "only admin can search reference"
        })
    }
}
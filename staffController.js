const sdb = require('./roomDB');

async function getAllStaff(req, res) {
    const staff = await rdb.getAllStaff();
    res.json(staff);
};

async function getStaffByID(req, res) {
    const staff = await rdb.getStaffByID(req.params.id);
    res.json(staff);
};

async function createStaff(req, res) {
    const staff = await rdb.createStaff(req.body.name, req.body.salary, req.body.profession);
    res.json(staff);
};

async function updateStaff(req, res) {
    const staff = await rdb.updateStaff(req.params.id, req.body.name, req.body.salary, req.body.profession);
    res.json(staff);
};

async function deleteStaff(req, res) {
    const staff = await rdb.deleteStaff(req.params.id);
    res.json(staff);
};

module.exports = { getAllStaff, getStaffByID, createStaff, updateStaff, deleteStaff };
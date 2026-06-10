const sdb = require('./staffDB');

async function getAllStaff(req, res) {
    const staff = await sdb.getAllStaff();
    res.json(staff);
};

async function getStaffByID(req, res) {
    const staff = await sdb.getStaffByID(req.params.id);
    res.json(staff);
};

async function createStaff(req, res) {
    const staff = await sdb.createStaff(req.body.name, req.body.salary, req.body.profession);
    res.json(staff);
};

async function updateStaff(req, res) {
    const staff = await sdb.updateStaff(req.params.id, req.body.name, req.body.salary, req.body.profession);
    res.json(staff);
};

async function deleteStaff(req, res) {
    const staff = await sdb.deleteStaff(req.params.id);
    res.json(staff);
};

module.exports = { getAllStaff, getStaffByID, createStaff, updateStaff, deleteStaff };
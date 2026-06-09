const bdb = require('./bookingDB');

async function getAllGuests(req, res) {
    const guests = await bdb.getAllGuests();
    res.json(guests);
};

async function getGuestByID(req, res) {
    const guest = await bdb.getGuestByID(req.params.id);
    res.json(guest);
};

async function createGuest(req, res) {
    const guest = await bdb.createGuest(req.body.name, req.body.phone_num, req.body.email);
    res.json(guest);
};

async function updateGuest(req, res) {
    const guest = await bdb.updateGuest(req.params.id, req.body.name, req.body.phone_num, req.body.email);
    res.json(guest);
};

async function deleteGuest(req, res) {
    const guest = await bdb.deleteGuest(req.params.id);
    res.json(guest);
};

module.exports = { getAllGuests, getGuestByID, createGuest, updateGuest, deleteGuest };
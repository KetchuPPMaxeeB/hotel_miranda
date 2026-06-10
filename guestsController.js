const gdb = require('./guestsDB');

async function getAllGuests(req, res) {
    const guests = await gdb.getAllGuests();
    res.json(guests);
};

async function getGuestByID(req, res) {
    const guest = await gdb.getGuestByID(req.params.id);
    console.log("Контроллер вызван");
    res.json(guest);
};

async function createGuest(req, res) {
    const guest = await gdb.createGuest(req.body.name, req.body.phone_num, req.body.email);
    res.json(guest);
};

async function updateGuest(req, res) {
    const guest = await gdb.updateGuest(req.params.id, req.body.name, req.body.phone_num, req.body.email);
    res.json(guest);
};

async function deleteGuest(req, res) {
    const guest = await gdb.deleteGuest(req.params.id);
    res.json(guest);
};

module.exports = { getAllGuests, getGuestByID, createGuest, updateGuest, deleteGuest };
const rdb = require('./roomDB');

async function getAllRooms(req, res) {
    const rooms = await rdb.getAllRooms();
    res.json(rooms);
};

async function getRoomByID(req, res) {
    const room = await rdb.getRoomByID(req.params.id);
    res.json(room);
};

async function createRoom(req, res) {
    const room = await rdb.createRoom(req.body.room_number, req.body.price, req.body.type);
    res.json(room);
};

async function updateRoom(req, res) {
    const room = await rdb.updateRoom(req.params.id, req.body.room_number, req.body.price, req.body.type);
    res.json(room);
};

async function deleteRoom(req, res) {
    const room = await rdb.deleteRoom(req.params.id);
    res.json(room);
};

module.exports = { getAllRooms, getRoomByID, createRoom, updateRoom, deleteRoom };
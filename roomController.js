const rdb = require('./roomDB');

async function getAllRooms(req, res) {
    const rooms = await rdb.getAllRooms();
    res.json(rooms);
};

async function getRoomByID(req, res) {
    const room = await rdb.getRoomByID();
    res.json(room);
};

async function createRoom(req, res) {
    const room = await rdb.createRoom();
    res.json(room);
};

async function updateRoom(req, res) {
    const room = await rdb.updateRoom();
    res.json(room);
};

async function deleteRoom(req, res) {
    const room = await rdb.deleteRoom();
    res.json(room);
};

module.exports = { getAllRooms, getRoomByID, createRoom, updateRoom, deleteRoom };
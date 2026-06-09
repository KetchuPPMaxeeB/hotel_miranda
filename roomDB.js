const pool = require('./db');

async function getAllRooms() {
    const result = await pool.query('SELECT * FROM room');
    return result.rows;
};

async function getRoomByID(id) {
    const result = await pool.query('SELECT * FROM rooms WHERE id=$1', [id]);
    return result.rows;
};

async function createRoom(room_number, price, type) {
    const result = await pool.query('INSERT INTO rooms (room_number, price, type) VALUES ($1, $2, $3)', [room_number, price, type]);
    return result.rows;
};

async function updateRoom(id, room_number, price, type) {
    const result = await pool.query('UPDATE rooms SET room_number=$1, price=$2, type=$3 WHERE id=$4', [room_number, price, type, id]);
    return result.rows;
};

async function deleteRoom(id) {
    const result = await pool.query('DELETE FROM rooms WHERE id=$1', [id]);
    return result.rows;
}

module.exports = { getAllRooms, getRoomByID, createRoom, updateRoom, deleteRoom };
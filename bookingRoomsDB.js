const pool = require('./db');

async function addToBookingRooms(booking_id, room_id) {
    const result = await pool.query('INSERT INTO booking_rooms (booking_id, room_id) VALUES ($1, $2)', [booking_id, room_id]);
    return result.rows;
};

async function getRoomsByBookingID(booking_id) {
    const result = await pool.query('SELECT room.room_number, room.price, room.type FROM booking JOIN booking_rooms ON booking.id = booking_id JOIN room ON room_id = room.id WHERE booking.id = $1', [booking_id]);
    return result.rows;
};

async function getBookingsByRoomID(room_id) {
    const result = await pool.query('SELECT guests.name, guests.phone_num, guests.email, room.room_number FROM room JOIN booking_rooms ON room.id = room_id JOIN booking ON booking_id = booking.id JOIN guests ON guest_id = guests.id WHERE room.id = $1', [room_id]);
    return result.rows;
};

module.exports = { addToBookingRooms, getBookingsByRoomID, getRoomsByBookingID };
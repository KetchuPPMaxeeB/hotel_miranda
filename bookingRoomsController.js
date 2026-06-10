const brdb = require('./bookingRoomsDB');

async function addToBookingRooms(req, res) {
    const bookingIDRoomID = await brdb.addToBookingRooms(req.body.room_id, req.body.booking_id);
    res.json(bookingIDRoomID);
};

async function getRoomsByBookingID(req, res) {
    const rooms = await brdb.getRoomsByBookingID(req.params.id);
    res.json(rooms);
};

async function getBookingsByRoomID(req, res) {
    const bookings = await brdb.getBookingsByRoomID(req.params.id);
    res.json(bookings);
};

module.exports = { addToBookingRooms, getRoomsByBookingID, getBookingsByRoomID };
const bdb = require('./bookingDB');

async function getAllBooking(req, res) {
    const bookings = await bdb.getAllBooking();
    res.json(bookings);
};

async function getBookingByID(req, res) {
    const booking = await bdb.getBookingByID(req.params.id);
    res.json(booking);
};

async function createBooking(req, res) {
    const booking = await bdb.createBooking(req.body.guest_id, req.body.arrive_date, req.body.departure_date);
    res.json(booking);
};

async function updateBooking(req, res) {
    const booking = await bdb.updateBooking(req.params.id, req.body.guest_id, req.body.arrive_date, req.body.departyre_date);
    res.json(booking); // Надо будет потом сделать шнягу, чтобы с помощью авторизации guest_id брался
};

async function deleteBooking(req, res) {
    const booking = await bdb.deleteBooking(req.params.id);
    res.json(booking);
};

module.exports = { getAllBooking, getBookingByID, createBooking, updateBooking, deleteBooking };
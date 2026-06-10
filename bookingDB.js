const pool = require('./db');

async function getAllBooking() {
    const result = await pool.query('SELECT * FROM booking');
    return result.rows;
};

async function getBookingByID(id) {
    const result = await pool.query('SELECT * FROM booking WHERE id=$1', [id]);
    return result.rows;
};

async function createBooking(guest_id, arrive_date, departure_date) {
    const result = await pool.query('INSERT INTO booking (guest_id, arrive_date, departure_date) VALUES ($1, $2, $3)', [guest_id, arrive_date, departure_date]);
    return result.rows;
};

async function updateBooking(id, guest_id, arrive_date, departure_date) {
    const result = await pool.query('UPDATE booking SET guest_id=$1, arrive_date=$2, departure_date=$3 WHERE id=$4', [guest_id, arrive_date, departure_date, id]);
    return result.rows;
};

async function deleteBooking(id) {
    const result = await pool.query('DELETE FROM booking WHERE id=$1', [id]);
    return result.rows;
};

module.exports = { getAllBooking, getBookingByID, createBooking, updateBooking, deleteBooking };
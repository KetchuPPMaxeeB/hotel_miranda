const pool = require('./db');

async function getAllGuests() {
    const result = await pool.query('SELECT * FROM guests');
    return result.rows;
};

async function getGuestByID(id) {
    const result = await pool.query('SELECT * FROM guests WHERE id=$1', [id]);
    return result.rows;
};

async function createGuest(name, phone_num, email) {
    const result = await pool.query('INSERT INTO guests (name, phone_num, email) VALUES ($1, $2, $3) RETURNING id', [name, phone_num, email]);
    return result.rows;
};

async function updateGuest(id, name, phone_num, email) {
    const result = await pool.query('UPDATE guests SET name=$1, phone_num=$2, email=$3 WHERE id=$4 RETURNING id', [name, phone_num, email, id]);
    return result.rows;
};

async function deleteGuest(id) {
    const result = await pool.query('DELETE FROM guests WHERE id=$1', [id]);
    return result.rows;
};

module.exports = { getAllGuests, getGuestByID, createGuest, updateGuest, deleteGuest };
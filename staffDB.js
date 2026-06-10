const pool = require('./db');

async function getAllStaff() {
    const result = await pool.query('SELECT * FROM staff');
    return result.rows;
};

async function getStaffByID(id) {
    const result = await pool.query('SELECT * FROM staff WHERE id=$1', [id]);
    return result.rows;
};

async function createStaff(name, salary, profession) {
    const result = await pool.query('INSERT INTO staff (name, salary, profession) VALUES ($1, $2, $3)', [name, salary, profession]);
    return result.rows;
};

async function updateStaff(id, name, salary, profession) {
    const result = await pool.query('UPDATE staff SET name=$1, salary=$2, profession=$3 WHERE id=$4', [name, salary, profession, id]);
    return result.rows;
};

async function deleteStaff(id) {
    const result = await pool.query('DELETE FROM staff WHERE id=$1', [id]);
    return result.rows;
}

module.exports = { getAllStaff, getStaffByID, createStaff, updateStaff, deleteStaff };
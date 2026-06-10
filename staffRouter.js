const express = require('express');
const router = express.Router();
const controller = require('./staffController');

router.get('/staff', controller.getAllStaff);

router.get('/staff/:id', controller.getStaffByID);

router.post('/staff', controller.createStaff);

router.put('/staff/:id', controller.updateStaff);

router.delete('/staff/:id', controller.deleteStaff);

module.exports = router;
const express = require('express');
const controller = require('./bookingController');
const router = express.Router();

router.get('/booking', controller.getAllBooking);

router.get('/booking/:id', controller.getBookingByID);

router.post('/booking', controller.createBooking);

router.put('/booking/:id', controller.updateBooking);

router.delete('/booking/:id', controller.deleteBooking);

module.exports = router;
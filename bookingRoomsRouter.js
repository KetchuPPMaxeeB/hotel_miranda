const controller = require('./bookingRoomsController');
const express = require('express');
const router = express.Router();

router.post('/bookingRoom', controller.addToBookingRooms);

router.get('/bookingRoom/:id/rooms', controller.getRoomsByBookingID);

router.get('/bookingRoom/:id/bookings', controller.getBookingsByRoomID);

module.exports = router;
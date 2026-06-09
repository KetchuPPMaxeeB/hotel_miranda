const express = require('express');
const router = require('./guestsRoute');
const route = express.Router();
const controller = require();

router.get('/room', controller.getAllRooms);

router.get('/room/:id', controller.getRoomByID);

router.post('/room', controller.createRoom);

router.post('/room/:id', controller.updateRoom);

router.delete('/room/:id', controller.deleteRoom);

module.exports = router;
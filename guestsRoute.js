const express = require('express');
const router = express.Router();
const controller = require('./guestsController');

router.get('/guests', controller.getAllGuests);

router.get('/guests/:id', controller.getGuestByID);

router.post('/guests', controller.createGuest);

router.put('/guests/:id', controller.updateGuest);

router.delete('/guests/:id', controller.deleteGuest);

module.exports = router;
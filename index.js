const express = require('express');
const guestsRouter = require('./guestsRouter');
const bookingRouter = require('./bookingRouter');
const roomRouter = require('./roomRouter');
const staffRouter = require('./staffRouter');
const bookingRoomsRouter = require('./bookingRoomsRouter');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(guestsRouter);
app.use(bookingRouter);
app.use(roomRouter);
app.use(staffRouter);
app.use(bookingRoomsRouter);
app.use('/images', express.static('./images'));

app.listen(3000, () => {
    console.log("Server is booted on 3000 port");
});
const express = require('express');
const router = require('./guestsRoute');
const app = express();
app.use(express.json());
app.use(router);

app.listen(3000, () => {
    console.log("Server is booted on 3000 port");
});
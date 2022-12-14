const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const iceCreams = require('./routes/api/iceCreams');

const app = express();
connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));
app.use('/api/icecreams', iceCreams);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));
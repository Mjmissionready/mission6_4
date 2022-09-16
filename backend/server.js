const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// routes
const app = express();
connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

const icecream = require('./routes/api/iceCreams.js');
app.get('/', (req, res) => res.send('Welcome to monodb API!'));

app.use('/api', icecream);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));

// libs: express, dotenv, mysql2, cors, morgan.
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, '../public'))); // Serve static files from the 'public' directory so you don't have to specify 'public' in the URL
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

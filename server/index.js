// libs: express, dotenv, mysql2, cors, morgan.
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

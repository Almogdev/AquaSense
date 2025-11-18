const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

// הגדרת פורט (אם אין ב-env, ברירת מחדל 3000)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

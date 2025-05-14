const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Portfolio API' });
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  const newMessage = { name, email, message, timestamp: new Date().toISOString() };
  const filePath = path.join(__dirname, 'messages.json');
  let messages = [];
  if (fs.existsSync(filePath)) {
    messages = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }
  messages.push(newMessage);
  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));
  res.status(201).json({ message: 'Message saved successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 
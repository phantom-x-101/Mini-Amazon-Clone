const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Load .env
dotenv.config({ path: path.resolve(__dirname, '.env'), debug: true });
console.log('📂 MONGO_URI:', process.env.MONGO_URI);

const app = express();
app.use(express.json());

// Logging every request
app.use((req, res, next) => {
  console.log(`➡️  Incoming ${req.method} request to ${req.url}`);
  next();
});

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/users', authRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ Mongo Error:', err));

// Root test route
app.get('/', (req, res) => {
  res.send('🟢 API is live');
});

// Catch-all 404
app.use((req, res) => {
  console.log(`❌ 404 for ${req.method} ${req.url}`);
  res.status(404).json({ error: 'Not Found', path: req.originalUrl });
});

app.listen(5000, () => console.log('🚀 Server is running on port 5000'));



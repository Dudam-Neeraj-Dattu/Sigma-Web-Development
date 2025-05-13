// index.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import process from 'process';
import passwordRoutes from './routes/passwordRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
   res.send('API is running...');
});

let conn = await mongoose.connect(process.env.MONGO_URI)
console.log('MongoDB connected:', conn.connection.host, conn.connection.port, conn.connection.name);

app.use('/api/passwords', passwordRoutes);

// Start server
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});

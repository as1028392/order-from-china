import dotenv from 'dotenv';
import express, { Express } from 'express';
import cors from 'cors';
import connectDB from './config/database';
import { errorHandler } from './middleware/errorHandler';
import routes from './routes/index';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
connectDB();

// Routes
app.use('/', routes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.path,
  });
});

// Error handler (must be last)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`
  ╔════════════════════════════════════════╗
  ║   Order From China - Backend Server    ║
  ║        🚀 Server is running on         ║
  ║         http://localhost:${PORT}        ║
  ╚════════════════════════════════════════╝
  `);
});

export default app;

import express from 'express';
import cors from 'cors';
import { sequelize } from './database/config.js';
import authRoutes from './routes/auth.routes.js';
import clientRoutes from './routes/client.routes.js';
import customerRoutes from './routes/customer.routes.js';
import estimateRoutes from './routes/estimate.routes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/estimates', estimateRoutes);

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    
    await sequelize.sync();
    console.log('Database models synchronized.');
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to start server:', error);
  }
}

startServer();
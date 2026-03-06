import express, { Application } from 'express';

import routes from './routes';

const app: Application = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// Health check
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default app;
import http from 'http';
import app from './app';
import config from './config';

const PORT = config.port || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Optional: graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down server...');
  server.close(() => process.exit(0));
});
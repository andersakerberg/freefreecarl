import express from 'express';
import cors from 'cors';
import { runMigrations } from './db/managers/migrationManager.js';
import casesRouter from './routes/cases.js';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Run migrations when server starts
runMigrations().catch(error => {
  console.error('Failed to run migrations:', error);
  process.exit(1);
});

// Use cases router
app.use('/api/cases', casesRouter);

app.listen(port); 
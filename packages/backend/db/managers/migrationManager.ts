import knex from 'knex';
import { dbConfig } from '../config.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

const createDatabase = async (): Promise<void> => {
  const { host, user, password, database } = dbConfig.connection as {
    host: string;
    user: string;
    password: string;
    database: string;
  };
  
  const tempKnex = knex({
    client: 'mysql2',
    connection: {
      host,
      user,
      password,
    },
  });

  try {
    await tempKnex.raw(`CREATE DATABASE IF NOT EXISTS ${database}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack
      });
    }
    throw error;
  } finally {
    await tempKnex.destroy();
  }
};

export const runMigrations = async (): Promise<void> => {
  try {
    await createDatabase();
    const db = knex(dbConfig);
    await db.migrate.latest();
    await db.seed.run();
    await db.destroy();
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack
      });
    }
    throw error;
  }
}; 
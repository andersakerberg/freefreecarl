import type { Knex } from "knex";
import dotenv from 'dotenv';

dotenv.config();

export const dbConfig: Knex.Config = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'legal_journal',
    port: parseInt(process.env.DB_PORT || '3306')
  }
}; 
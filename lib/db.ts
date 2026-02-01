import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

// Fallback to prevent build errors when DATABASE_URL is not set
const databaseUrl = process.env.DATABASE_URL || 'postgresql://dummy:dummy@localhost:5432/dummy';
const sql = neon(databaseUrl);

// Export the database instance
export const db = drizzle(sql, { schema });

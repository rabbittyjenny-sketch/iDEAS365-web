import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

// This will use the DATABASE_URL from your .env.local file
const sql = neon(process.env.DATABASE_URL!);

// Export the database instance
export const db = drizzle(sql, { schema });

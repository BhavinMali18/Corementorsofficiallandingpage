import pkg from 'pg';
const { Pool } = pkg;

// Database configuration
const pool = new Pool({
  host: process.env.DB_HOST || '147.93.155.38',
  port: process.env.DB_PORT || 5423, // Public port
  database: process.env.DB_NAME || 'postgres',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'asdfghjkl',
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
  max: 20, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Test connection
export async function testConnection() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW() as current_time, version() as pg_version');
    client.release();
    return {
      success: true,
      message: 'Database connection successful',
      data: {
        currentTime: result.rows[0].current_time,
        version: result.rows[0].pg_version,
      },
    };
  } catch (error) {
    return {
      success: false,
      message: 'Database connection failed',
      error: error.message,
    };
  }
}

// Execute a query
export async function query(text, params) {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    return {
      success: true,
      data: res.rows,
      rowCount: res.rowCount,
      duration: `${duration}ms`,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

// Get pool stats
export function getPoolStats() {
  return {
    totalCount: pool.totalCount,
    idleCount: pool.idleCount,
    waitingCount: pool.waitingCount,
  };
}

export { pool };


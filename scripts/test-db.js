import { testConnection, getPoolStats } from '../lib/db.js';

async function main() {
  console.log('🧪 Testing PostgreSQL database connection...\n');

  const result = await testConnection();
  const poolStats = getPoolStats();

  if (result.success) {
    console.log('✅ Database connection successful!\n');
    console.log('📊 Database Information:');
    console.log(`   Current Time: ${result.data.currentTime}`);
    console.log(`   PostgreSQL Version: ${result.data.pg_version}\n`);
  } else {
    console.log('❌ Database connection failed!\n');
    console.log(`   Error: ${result.error}\n`);
    process.exit(1);
  }

  console.log('📈 Connection Pool Statistics:');
  console.log(`   Total Connections: ${poolStats.totalCount || 0}`);
  console.log(`   Idle Connections: ${poolStats.idleCount || 0}`);
  console.log(`   Waiting Requests: ${poolStats.waitingCount || 0}\n`);

  process.exit(0);
}

main().catch((error) => {
  console.error('❌ Test failed:', error);
  process.exit(1);
});


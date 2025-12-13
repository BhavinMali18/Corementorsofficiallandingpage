import { testConnection, getPoolStats } from '../../../../lib/db';

export async function GET() {
  try {
    const connectionTest = await testConnection();
    const poolStats = getPoolStats();

    return Response.json({
      ...connectionTest,
      poolStats,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: 'Database test failed',
        error: error.message,
      },
      { status: 500 }
    );
  }
}


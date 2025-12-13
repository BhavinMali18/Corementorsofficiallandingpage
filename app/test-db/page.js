'use client';

import { useState, useEffect } from 'react';

export default function TestDB() {
  const [testResult, setTestResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(false);

  const runTest = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/db/test');
      const data = await response.json();
      setTestResult(data);
    } catch (error) {
      setTestResult({
        success: false,
        message: 'Failed to test database',
        error: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    runTest();
  }, []);

  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(runTest, 5000);
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Database Connection Test
              </h1>
              <p className="text-gray-600">
                Test PostgreSQL database connection and view connection stats
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={runTest}
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? 'Testing...' : 'Test Connection'}
              </button>
              <button
                onClick={() => setAutoRefresh(!autoRefresh)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  autoRefresh
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {autoRefresh ? 'Stop Auto-Refresh' : 'Auto-Refresh'}
              </button>
            </div>
          </div>

          {testResult && (
            <div className="space-y-4">
              {/* Connection Status */}
              <div
                className={`p-6 rounded-lg border-2 ${
                  testResult.success
                    ? 'bg-green-50 border-green-200'
                    : 'bg-red-50 border-red-200'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      testResult.success ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  />
                  <h2 className="text-xl font-semibold text-gray-900">
                    {testResult.success ? '✅ Connected' : '❌ Connection Failed'}
                  </h2>
                </div>
                <p className="text-gray-700 mb-2">{testResult.message}</p>
                {testResult.error && (
                  <p className="text-red-600 font-mono text-sm">{testResult.error}</p>
                )}
              </div>

              {/* Database Info */}
              {testResult.success && testResult.data && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Database Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Current Time</p>
                      <p className="text-gray-900 font-mono">
                        {new Date(testResult.data.currentTime).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">PostgreSQL Version</p>
                      <p className="text-gray-900 font-mono text-sm">
                        {testResult.data.pg_version}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Pool Stats */}
              {testResult.poolStats && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Connection Pool Statistics
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total Connections</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {testResult.poolStats.totalCount || 0}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Idle Connections</p>
                      <p className="text-2xl font-bold text-green-600">
                        {testResult.poolStats.idleCount || 0}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Waiting Requests</p>
                      <p className="text-2xl font-bold text-orange-600">
                        {testResult.poolStats.waitingCount || 0}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Timestamp */}
              <div className="text-sm text-gray-500 text-right">
                Last tested: {new Date(testResult.timestamp).toLocaleString()}
              </div>
            </div>
          )}

          {/* Connection Details */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Connection Configuration
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Host:</span>
                <span className="font-mono text-gray-900">
                  {process.env.NEXT_PUBLIC_DB_HOST || '147.93.155.38'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Port:</span>
                <span className="font-mono text-gray-900">
                  {process.env.NEXT_PUBLIC_DB_PORT || '5423'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Database:</span>
                <span className="font-mono text-gray-900">
                  {process.env.NEXT_PUBLIC_DB_NAME || 'postgres'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">User:</span>
                <span className="font-mono text-gray-900">
                  {process.env.NEXT_PUBLIC_DB_USER || 'postgres'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


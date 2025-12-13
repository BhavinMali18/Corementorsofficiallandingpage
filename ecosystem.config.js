module.exports = {
  apps: [{
    name: 'corementors',
    script: 'npm',
    args: 'start',
    env: {
      PORT: 3003,
      NODE_ENV: 'production'
    },
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    max_memory_restart: '1G',
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true
  }]
};




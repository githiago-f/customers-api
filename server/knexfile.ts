module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/dev.sqlite3'
    },
    seeds: {
      directory: './seeds'
    }
  },
  production: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST||'localhost',
      database: process.env.DB_NAME||'application',
      password: process.env.DB_PASSWORD||'',
      user: process.env.DB_USERNAME||'root'
    }
  }
};

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/dev.sqlite3"
    }
  },
  production: {
    client: "mysql2",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    }
  }
};

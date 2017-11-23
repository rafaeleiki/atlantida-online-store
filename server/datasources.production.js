module.exports = {
  db: {
    name: 'db',
    connector: 'postgresql',

    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    url: process.env.DATABASE_URL,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    user: process.env.DATABASE_USER,
  }
};

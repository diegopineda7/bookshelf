const config = {
  appConfig: {
    host: process.env.APP_HOST,
    port: process.env.PORT || process.env.APP_PORT
  },
  dbConfig: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME
  }
}

module.exports = config

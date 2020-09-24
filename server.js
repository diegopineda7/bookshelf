require('dotenv').config()
const connectDB = require('./db/mongodb')
const { appConfig, dbConfig } = require('./config')
const app = require('./app')

const initApp = async (appConfig, dbConfig) => {
  const { host, port } = appConfig
  try {
    await connectDB(dbConfig)
    app.listen(port, () => console.log(`Listening on  ${host}:${port}`))
  } catch (e) {
    console.error(e)
    process.exit(0)
  }
}

initApp(appConfig, dbConfig)

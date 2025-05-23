require('dotenv').config()
const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')

app.listen(config.PORT, ()=> {
  console.log(`Server running in ${config.PORT}`)
})

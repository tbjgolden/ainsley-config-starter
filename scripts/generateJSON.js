const fs = require('fs')
const path = require('path')
const { config } = require('..')

fs.writeFileSync(
  path.join(__dirname, '../dist/config.json'),
  JSON.stringify(config)
)

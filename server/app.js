const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')
const app = express()
const ruta_S_O = __dirname; //ruta del proyecto en el Sistema Operativo

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)


//Static files archivos enviados al front
app.use(express.static(ruta_S_O + '/public'));

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })

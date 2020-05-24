const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const authRoute = require("./routes/auth")

const app = express()

dotenv.config()

// Initiate Mongo Server
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


// app configuration
const port = process.env.PORT || 3000


// app middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.static(__dirname + '/public'))


// load API routes
app.use('/api/users', authRoute)


// establish http server connection
app.listen(port, () => {
  console.log(`Server Running at ${port}`)
})

process.on('exit', (code) => {
  connect.close();
  console.log(`About to exit with code: ${code}`)
})


process.on('SIGINT', function() {
  console.log("Caught interrupt signal");
  process.exit();
})
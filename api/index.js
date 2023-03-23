const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

mongoose
  .connect(process.env.CONNECTION_URL, {
    
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err))

  app.listen("5000", () => {
    console.log("backend running...")
  })
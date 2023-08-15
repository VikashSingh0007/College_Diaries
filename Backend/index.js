
const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")


const multer = require("multer")
const path = require("path")


const authRoute = require("./routes/auth")
const authUser = require("./routes/user")
const authPost = require("./routes/post")


const cloudinary = require("cloudinary").v2;
dotenv.config()

// Configuration
cloudinary.config({
  secure: true,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


app.use(express.json({ extended: false, limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }))

app.use("/images", express.static(path.join(__dirname, "/images")))


mongoose
  .connect("mongodb+srv://singhvikash7077:VIKASH7077@cluster0.y0b4mte.mongodb.net/Registered?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    /*  useCreateIndex: true,
    useFindAndModify: true,*/
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err))




app.use("/auth", authRoute)
app.use("/users", authUser)
app.use("/posts", authPost)



app.listen("5000", () => {
  console.log("backend running...")
})

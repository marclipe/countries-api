const express = require('express')
const cors = require("cors")
const app = express()
const port = 3001
const cookieParser = require("cookie-parser");

const countryRouter = require("../routes/countryRoute.js")

app.use(cors())
app.use(express.json())
app.use("/api", countryRouter)
app.use(cookieParser());

app.listen(port, () => {
  console.log(`App listening on port:${port}`)
})

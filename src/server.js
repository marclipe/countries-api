const express = require('express')
const app = express()
const port = 3001

const countryRouter = require("../routes/countryRoute.js")

app.use(express.json())
app.use("/api", countryRouter)

app.listen(port, () => {
  console.log(`App listening on port:${port}`)
})

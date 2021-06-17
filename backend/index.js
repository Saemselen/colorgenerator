const express = require("express")
const cors = require("cors")

const colorRoutes = require("./api/colors")

const app = express()

const port = 80

app.use(express.json())
app.use(cors())

app.use("/api/colors", colorRoutes)

app.listen(port, () => {
    console.clear()
    console.log(`=> app listening on port ${port}`)
})

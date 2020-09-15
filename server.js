const express = require('express')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.use(express.json())

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', (req, res) => {
    return res.send("index.html")
})

const server = app.listen(5000, () => {
    console.log("Server running in " + process.env.NODE_ENV + " mode on port " + 5000)
})

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`)
    server.close(() => process.exit(1))
})


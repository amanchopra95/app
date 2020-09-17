const express = require('express')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

// Router
const data = require('./src/routes/data')

const app = express()

app.use(express.json())

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client/build')))

app.use('/data', data)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

const PORT = process.env.port || 5000

const server = app.listen(PORT, () => {
    console.log("Server running in " + process.env.NODE_ENV + " mode on port " + PORT)
})

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`)
    server.close(() => process.exit(1))
})


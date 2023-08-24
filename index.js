const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 8080;

app.use(cors())

app.get('/', function (req, res, next) {
    res.json({
        message: `Hello World!`
    })
})

app.get('/ping', function (req, res, next) {
    res.json({
        message: `Pong!!`
    })
})

app.listen(PORT, function () {
    console.log(`CORS-enabled web server listening on port ${PORT}`)
})

// module.exports = app;

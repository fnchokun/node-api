const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 8080;

app.use(cors())

app.get('/', function (req, res, next) {
    res.json({
        message: `Hello World!`
    })
});

app.get('/ping', function (req, res, next) {
    res.json({
        message: `Pong!!`
    })
});

app.get('/time', function (req, res, next) {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    let h_m = hours + minutes;
    
    res.json({
        'time': h_m
    });
}
app.listen(PORT, function () {
    console.log(`CORS-enabled web server listening on port ${PORT}`)
})

// module.exports = app;

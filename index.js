const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 8080;

app.use(express.static('public'))


app.get('/', function (req, res) {
    // res.json({
    //     message: `Hello World!`
    // })

    res.sendFile('index.html', {root: path.join(__dirname, 'public')});

})

// app.get('/ping', function (req, res, next) {
//     res.json({
//         message: `Pong!`
//     })
// })

app.listen(PORT, function () {
    console.log(`CORS-enabled web server listening on port ${PORT}`)
})

module.exports = app

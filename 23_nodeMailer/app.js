const express = require('express')
const app = express();

const sendMail = require('./controllers/sendMail')

let PORT = 5000;

app.get('/', (req, res) => {
    res.send('I am a server');
});

app.get('/mail', sendMail)

const start = async() => {
    try {
        app.listen(PORT, () => {
            console.log(`I am listening at port no ${PORT}`)
        })
    } catch (error) {
        
    }
}

start();
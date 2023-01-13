const express = require('express')
const redis = require('redis')

const app = express();
const client = redis.createClient();

app.get('/', (req, res) =>{
    client.get('visit', (err, visit) => {
        res.send('Number visit ', + visit)
        client.set('visit ', parseInt(visit) + 1)
    })
})

app.listen(8081, () => {
    console.log('Listening on port 8081')
})
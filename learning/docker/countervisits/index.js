const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379 //default redis port
});
const listenPort = 8585;

client.set('visits', 0);


app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Odwiedziłeś stronę ' + visits +' razy');
        client.set('visits', parseInt(visits) + 1);

    });
});


app.listen(listenPort, () => {
    console.log('Listening on port ' + listenPort);
})
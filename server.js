const express = require('express');

const app = express();

app.use('/', express.static(__dirname + '/'));


app.get('/', (request, response) => {
    response.sendFile('/home.html', {root: __dirname})
});


app.listen(3001, () => {
    console.log('listening on port 3001');
});


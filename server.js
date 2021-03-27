const express = require('express');
const path = require('path');

const ngApp = express();

ngApp.use(express.static('./dist/mercado-libre'));

ngApp.get('/*', function (request, response) {
    response.sendFile(path.join(__dirname, '/dist/mercado-libre/index.html'));
});

ngApp.listen(process.env.PORT || 8080);

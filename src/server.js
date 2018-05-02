const express = require('express');

const app = express();

app.use('/static', express.static('build'));

app.get('/*', (_, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

            <link rel="stylesheet" type="text/css" href="/static/app.css"/>
            <title>Vanilla JavaScript boilerplate</title>
        </head>
        <body>
            <h1>Hello World</h1>
            <script type="text/javascript" src="/static/app.js"></script>
        </body>
    </html>
    `);
});

/* eslint no-console: 'off' */
app.listen(3000, () => console.log('App can be visited on localhost:3000'));

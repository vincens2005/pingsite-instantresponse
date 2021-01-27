var express = require('express');
const https = require('https');
const http = require('http');
const { request, response } = require('express');
var app = express();
app.get("/:urltoping", (request, response) => {
    response.writeHead(200, {
        "content-type": "application/json",
        'cache-control': 'no-cache',
        'access-control-allow-origin': '*',
        'connection': 'keep-alive'
    });
    var rptxt = {
        pinging: true
    }
    response.write(JSON.stringify(rptxt));
    response.end()
    var urltoping = decodeURIComponent(request.params.urltoping);
    if (urltoping.startsWith("https://")) {
        https.get(urltoping, (res) => {
            console.log("pons")
        })
            .on('error', (e) => {
                console.error(e);
            });
    }
    else if (urltoping.startsWith("http://")) {
        http.get(urltoping, (res) => {
            console.log("pon")
        })
            .on('error', (e) => {
                console.error(e);
            });
    }
    else {
        console.log("idiot alert")
    }
});
app.get("/", (request, response) => {
    response.writeHead(200, {
        "content-type": "text/plain",
        'cache-control': 'no-cache',
        'access-control-allow-origin': '*',
        'connection': 'keep-alive'
    });
    response.write(`
    Hello.
    Use this to ping stuff.
    There's CORS. ping from wherever.
    have fun. :p
    `);
    response.end()
});
app.listen(5500);
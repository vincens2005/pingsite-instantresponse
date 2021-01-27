var express = require('express');
const https = require('https');
const http = require('http')
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
    else if(urltoping.startsWith("http://")){
        http.get(urltoping, (res) => {
            console.log("pon")
        })
            .on('error', (e) => {
                console.error(e);
            });
    }
    else{
        console.log("idiot alert")
    }
});
app.listen(5500);
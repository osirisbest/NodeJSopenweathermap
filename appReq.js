//Test connection to 1C
const http = require('http');
let username = "sd", passw = 111, path = '/omnic/hs/ping?t=1'

let host = 'localhost'
var options = {
    host,
    port: 80,
    path,
    // authentication headers
    headers: {
        //'Authorization': 'Basic c2Q6MTEx'// + new Buffer(username + ':' + passw).toString('base64')
        'Authorization': 'Basic '+ Buffer.from(username + ':' + passw).toString('base64')
    }
};

//this is the call
function doGet() {
    let request = http.get(options, function (res) {
        var body = "";
        res.on('data', function (data) {
            body += data;
        });
        res.on('end', function () {
            //here we have the full response, html or json object
            console.log(body);
        })
        res.on('error', function (e) {
            onsole.log("Got error: " + e.message);
        });
    }
    )
}

console.log(options)

setInterval(() => { doGet() }, 3000)
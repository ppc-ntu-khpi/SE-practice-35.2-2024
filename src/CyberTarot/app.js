const https = require("https");
const fs = require("fs");

var httpsOptions = {
    key: fs.readFileSync('keys/server.key'),
    cert: fs.readFileSync('keys/server.crt'),
};

https.createServer(httpsOptions, function(req, res) {
    fs.readFile(__dirname + req.url, function (err,data) {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
}).listen(3334);
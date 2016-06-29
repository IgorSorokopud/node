var http = require('http');
var fs = require('fs');

var server = new http.Server(function (req, res) {

    if (req.url == '/') {

        fs.readFile('index.html', function (err, info) {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end('На сервере произошла ошибка');
                return;
            }

            res.end(info);
        });

    } else { /*  404  */ }

}).listen(3000);

setTimeout(function() {
    server.close();
}, 2500);

var timer = setInterval(function() {
   console.log(process.memoryUsage());
}, 1000);

timer.unref();
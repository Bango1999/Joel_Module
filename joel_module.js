http = require('http');
fs = require('fs');
querystring = require('querystring');
require('./joels_beard.js');
console.log(Cli);
server = http.createServer( function(req, res) {
    //console.dir(req.param);

    if (req.method == 'POST') {
        var body = '';
	var objbody;
	var textbody;
        req.on('data', function (data) {
            console.log("Received Data Chunk");
            body += data;
        });
        req.on('end', function () {
            objbody = querystring.parse(body);
            textbody = JSON.stringify(objbody.input);
            //let server log know whats been submitted
            var utc = new Date().toJSON().slice(0,10);
            console.log('--------- NEW FORM SUBMISSION ---------\r\n' + utc + '\r\n---------------------------------------\r\n');
            console.log(objbody.input);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<html><body><textarea style="width:800px;height:500px;">');
            res.write(objbody.input);
            res.write('</textarea></body></html>');
            res.end();
        });
    } else  {
        var html = fs.readFileSync('index.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    }

});

port = 3669;
server.listen(port);
console.log('Listening on ' + port);

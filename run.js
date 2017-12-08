//node D:\Documents\website\run.js
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var path1 = 'D:/Documents/website/';
http.createServer(function (req, res) {
	var q = url.parse(req.url, true);
	var filename = q.pathname;
	var fileloc = path1 + filename;
	var filetype = path.extname(filename);
	fs.readFile(fileloc, (err, data) => {
		var content = data;
		if (err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end("404 Not Found");
		}  
		switch (filetype){
			case '.html':
			res.writeHead(200, {'Content-Type': 'text/html'});
			break;
			case '.css':
			res.writeHead(200, {'Content-Type': 'text/css'});
			break;
			case '.xml':
			res.writeHead(200, {'Content-Type': 'text/xml'});
			break;
		}
		res.write(content);
		return res.end();
	});
}).listen(8080);
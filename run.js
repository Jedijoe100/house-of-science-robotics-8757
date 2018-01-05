const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .get('/people', (req, res) => res.render('pages/people'))
    .get('/club', (req, res) => res.render('pages/club'))
    .get('/robots', (req, res) => res.render('pages/robots'))
    .get('/articles', (req, res) => res.contentType('text/xml').render('pages/articles'))
    .get('/images', (req, res) => res.contentType('text/xml').render('pages/images'))
    //.get('/articles', (req, res) => res.render('pages/articles'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))


/*//node D:\Documents\website\run.js
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var path1 = "";
http.createServer(function (req, res) {
	var q = url.parse(req.url, true);
	var filename = q.pathname;
	var fileloc = path1 + filename;
	var filetype = path.extname(filename);
	fs.readFile(fileloc, function(err, data) {
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
            case '.png':
                res.writeHead(200, {'Content-Type': 'image/png'});
                break;
		}
		res.write(content);
		return res.end();
	});
}).listen(8080);*/
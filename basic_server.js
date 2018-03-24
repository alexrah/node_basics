'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var index = _fs2.default.readFileSync('templates/index.html'); // const http = require('http');

var test = _fs2.default.readFileSync('templates/test.html');

var app = (0, _express2.default)();

app.get('/', function (req, res) {
    console.log('here in index we are');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(index);
});

app.get('/test', function (req, res) {

    console.log('here in test we are');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(test);
});

app.listen(1235);
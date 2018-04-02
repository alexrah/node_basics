'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _api = require('./routes/api');

var _api2 = _interopRequireDefault(_api);

var _fetch = require('./routes/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

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

app.use('/api', _api2.default);
app.use('/fetch', _fetch2.default);
app.listen(1235);
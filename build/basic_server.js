'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _api = require('./routes/api');

var _api2 = _interopRequireDefault(_api);

var _fetch = require('./routes/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var index = _fs2.default.readFileSync('templates/index.html'); // import http from 'http';

var test = _fs2.default.readFileSync('templates/test.html');

//test test test test again test and test

var app = (0, _express2.default)();

// view engine setup
app.set('views', _path2.default.join(__dirname, '../views'));
app.set('view engine', 'twig');

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
// app.use('/pdf', fetchingwiki );

app.listen(1235);
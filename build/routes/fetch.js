"use strict";

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _cheerio = require("cheerio");

var _cheerio2 = _interopRequireDefault(_cheerio);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _fetch = require("../controller/fetch");

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var myTitle = void 0;

router.get('/', function (req, res) {
    console.log(req);
    res.redirect(req.baseUrl + '/wiki');
});

router.get('/wiki', function (req, res) {
    console.log('fetch router');
    var base_url = "https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris";
    _axios2.default.get(base_url).then(function (res) {
        var $ = _cheerio2.default.load(res.data);
        $('h1').each(function (i, elm) {
            console.log($(elm).text());
            myTitle = $(elm).text();
        });

        return myTitle;
    }).then(function (myTitle) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(myTitle);
    });
});

module.exports = router;
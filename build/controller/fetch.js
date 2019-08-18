"use strict";

var _index = require("axios/index");

var _index2 = _interopRequireDefault(_index);

var _cheerio = require("cheerio");

var _cheerio2 = _interopRequireDefault(_cheerio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.fetchWikiTitle = function (req, res) {
    var myContent = [];
    var base_url = 'https://' + req.params.lang + '.wikipedia.org/wiki/';
    var query_url = req.params.query_url;
    var full_url = base_url + query_url;
    console.log(full_url);
    _index2.default.get(full_url).then(function (res) {
        var $ = _cheerio2.default.load(res.data);
        $('.mw-parser-output p').each(function (i, elm) {
            // console.log($(elm).text());
            myContent.push($(elm).text());
        });

        return myContent;
    }).then(function (myContent) {
        // res.writeHead(200, {'Content-Type': 'text/html'});
        // res.end(myContent.join());
        res.render('fetch/wiki', { contents: myContent, title: "Fetch from Wikipedia" });
    }).catch(function (err) {
        console.error(err);
    });
};
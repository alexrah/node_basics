'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fetch = require('../controller/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
    console.log(req);
    res.redirect(req.baseUrl + '/wiki');
});

router.get('/wiki/:lang/:query_url', _fetch2.default.fetchWikiTitle);

// export
module.exports = router;
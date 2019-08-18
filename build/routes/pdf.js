'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
// test test test prova babel try reload again
router.get('/', pdf.generate);
router.get('/generate', pdf.generate);
router.get('/generate/pdf', pdf.generate);
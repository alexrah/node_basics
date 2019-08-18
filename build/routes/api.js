'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// router.get(/[a-zA-z]*\//,(req, res) => {
//     res.redirect(req.baseUrl+'/bookcover/isdn/:isdn')
// });


router.get('/bookcover/isdn/:isdn', function (req, res) {
    if (req.params.isdn) {
        console.log(req.params.isdn);
    } else {
        console.log('no params!');
    }
    res.end();
});

module.exports = router;
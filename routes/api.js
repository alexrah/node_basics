import express from 'express';
let router = express.Router();

router.get('/',(req,res) => {
    console.log(req.query.isdn);

    res.end();
});

module.exports = router;

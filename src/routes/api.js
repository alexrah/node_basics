import express from 'express';
let router = express.Router();


// router.get(/[a-zA-z]*\//,(req, res) => {
//     res.redirect(req.baseUrl+'/bookcover/isdn/:isdn')
// });


router.get('/bookcover/isdn/:isdn',(req,res) => {
    if(req.params.isdn){
        console.log(req.params.isdn);
    }
    else { console.log('no params!')}
    res.end();
});

module.exports = router;

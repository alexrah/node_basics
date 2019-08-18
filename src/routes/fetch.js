import express from "express";
import fetch from '../controller/fetch';

let router = express.Router();

router.get('/',(req, res) => {
    console.log(req);
    res.redirect(req.baseUrl+'/wiki/en/Main_Page');
});

console.log('prova','prova prova');

router.get('/wiki/:lang/:query_url', fetch.fetchWikiTitle);

// export
module.exports = router;
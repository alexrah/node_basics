// const http = require('http');
import http from 'http';
import fs from 'fs';

import express from 'express';
let app = express();

app.get('/test',function (req, res) {

    console.log('here in test we are');
    res.end("Ciao, qui tutti bene");

});

app.listen(1235);

// const index = fs.readFileSync('templates/index.html');
// http.createServer(function (req,res) {
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.end(index);
// }).listen(1234);

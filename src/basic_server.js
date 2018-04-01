// const http = require('http');
import http from 'http';
import fs from 'fs';
import express from 'express';
import api from '../routes/api';

const index = fs.readFileSync('templates/index.html');
const test = fs.readFileSync('templates/test.html');

let app = express();

app.

app.get('/',function(req,res){
    console.log('here in index we are');
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(index);
});

app.get('/test',function (req, res) {

    console.log('here in test we are');
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(test);

});

app.use('/api',api);

app.listen(1235);

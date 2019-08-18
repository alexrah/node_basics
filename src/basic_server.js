// import http from 'http';
import fs from 'fs';
import express from 'express';
import api from './routes/api';
import fetchingwiki from "./routes/fetch";
import path from 'path';

const index = fs.readFileSync('templates/index.html');
const test = fs.readFileSync('templates/test.html');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'twig');


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
app.use('/fetch', fetchingwiki );
// app.use('/pdf', fetchingwiki );

app.listen(1235);

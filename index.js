const express = require('express');
var cookieParser = require('cookie-parser'); 
const handler = require('./handler');

const app = express();
app.use(express.json());
app.use(cookieParser()); 

const adminRoute = express.Router();
adminRoute.get('/dashboard', (req, res)=>{
    console.log(req.originalUrl);
    console.log(req.url);
    console.log(req.path);
    console.log(req.hostname);
    console.log(req.ip);
    res.send('We are in admin dashboard');
});

app.use('/admin', adminRoute);

app.get('/user/:id', (req, res)=>{
    console.log(req.originalUrl);
    console.log(req.url);
    console.log(req.path);
    console.log(req.hostname);
    console.log(req.ip);
    console.log(req.method);
    console.log(req.protocol);
    console.log(req.params);
    console.log(req.query);
    console.log(req.cookies);
    res.send('welcome to application');
});

app.get('/handler/', handler);

app.post('/user/', (req, res)=>{
    console.log(req.body);
    res.send('welcome to Post Application URL');
});

app.listen(3000, ()=> {
    console.log('listening on port 3000');
});
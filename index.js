const express = require('express');
const app = express();

const router = express.Router();
app.use(router);
// app.use(express.json());
// app.use(express.raw());
// app.use(express.text());
// app.use(express.urlencoded());
// app.use(express.static(`${__dirname}/public/`));


app.use(express.static(`${__dirname}/public/`, {
    index: 'home.html',
    })
);

app.get('/', (req, res) => {
    res.send('This is home page');
});

app.post('/for-json', (req, res) => {
    console.log(req.body);
    res.send('This is post request for application/json and use express.json()');
});

app.post('/for-raw', (req, res) => {
    // console.log(req.body);
    console.log(req.body.toString());
    res.send('This is post request for application/octet-stream and use express.raw()');
});

app.post('/for-text', (req, res) => {
    console.log(req.body);
    res.send('This is post request for content-type text/plain and use express.text()');
});

app.post('/for-urlencoded', (req, res) => {
    console.log(req.body);
    res.send('This is post request for content-type application/x-www-form-urlencoded and use express.urlencoded()');
});

app.get('/', (req, res) => {
    // res.send('This is public access for file use this route http://localhost:3000/text/test.txt');
    res.send('This is public access for file use if need any home route name, this route http://localhost:3000/text');
});


router.get('/router', (req, res) => {
    res.send('This is Router page');
});



app.listen(3000, ()=> {
    console.log('listening on port 3000');
});
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/test', (req, res) => {
    res.send('Hello Redirect');
});
app.get('/testRedirect', (req, res) => {
    res.redirect('/test');
    res.end();
});

app.get('/about', (req, res)=>{
    // res.send('About Page');
    // console.log(res.headersSent);
    // res.render('pages/about', {
    //     name: 'Bangladesh'
    // });

    // res.json({
    //     name: 'Dhaka',
    // });
    
    // res.status(200);
    // res.end();

    // res.cookie('name', 'Pitash');
    // res.end();

    // res.location('/test');
    // res.end();

    res.format({
        'text/plain': ()=> {
            res.send('hi');
        },
        'text/html': ()=> {
            res.render('pages/about',{
                name: 'Bangladesh'
            });
        },
        'application/json': ()=> {
            res.json({
                message: 'About'
            });
        },
        default: () => {
            res.status(400).send('Not Acceptable');
        }
    });

    // console.log(res.headersSent);
})

app.listen(3000, ()=> {
    console.log('listening on port 3000');
});
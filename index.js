const express = require('express');
// const handle = require('./handle');

const app = express();

app.set('view engine','ejs');

// app.enable('case sensitive routing');

app.locals.title = 'My App';

// app.get('/', handle);

// app.get('/CaseSensitive', (req, res)=>{
//     res.send('welcome to case sensitive routing');
// });

app.all('/', (req, res)=>{
    res.send('welcome to application');
});

// Start for param
app.param('id', (req, res, next, id)=>{
    const user = {
        userid: id,
        name:'Bangladesh',
    };
    req.userDetails = user;
    next();
});

app.get('/user/:id', (req, res)=>{
    console.log(req.userDetails);
    res.send('Welcome to id wise data');
});

// End for param

// Start For Route

// app.get('/', (req, res)=>{
//     res.send('welcome to application get');
// });
// app.post('/', (req, res)=>{
//     res.send('welcome to application post');
// });
// app.put('/', (req, res)=>{
//     res.send('welcome to application put');
// });

app.route('/about/mission')
    .get((req, res)=>{
        // res.send('welcome to application get');
        // res.render('pages/about');
    })
    .post((req, res)=>{
        res.send('welcome to application post');
    })
    .put((req, res)=>{
        res.send('welcome to application put');
    });

// End For Route

//Start For EJS
app.get('/ejs', (req, res)=>{
    res.render('pages/about');
});
//End For EJS



app.listen(3000, ()=> {
    console.log('listening on port 3000');
});
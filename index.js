const express = require('express');

const app = express();

const adminRoute = express.Router();
adminRoute.get('/dashboard', (req, res)=>{
    console.log(req.baseUrl);
    res.send('We are in admin dashboard');
});

app.use('/admin', adminRoute);

app.get('/', (req, res)=>{
    console.log(req.baseUrl);
    res.send('welcome to application');
});

app.listen(3000, ()=> {
    console.log('listening on port 3000');
});
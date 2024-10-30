const express = require('express');
const fs = require('fs');
const app = express();

// app.get('/', (req, res) => {
//     // res.send('Home');
//     // throw new Error("There was an error");
//     res.send(a);
// });

// app.use((req, res, next)=> {
//     // res.status(404).send('Request url not found');
//     next('Request url not found');
// });

// app.use((err, req, res, next) => {
//     if(err.message){
//         res.status(500).send(err.message);
//     }else {
//         res.send('There Was an Error!');
//     }
// });


//For Asynchorous way

app.get('/async', (req, res, next) => {
    fs.readFile('/file-does-note-exist', (err, data) => {
        if(err) {
            next(err);
        }else {
            res.send(data);
        }
    });
});


app.get('/middleware-chaining', [
    (req, res, next) => {
        fs.readFile('/file-does-note-exist', 'utf-8', (err, data) => {
            console.log(data);
            next(err);
        });
    },
    (req, res, next) => {
        console.log(data.property);   
    },
]);

app.use((err, req, res, next) => {
    if(res.headerSent) {
        next("There was a problem");
    }else{
        if(err.message) {
            res.status(500).send(err.message);
        }else{
            res.send('There was an error');
        }
    }
});

app.listen(3000, ()=> {
    console.log('listening on port 3000');
});
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

const adminRouter = express.Router();


// Configureable Middleware

const loggerWrapper = (options) => {
    return function(req, res, next){
        if(options.log) {
            console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${req.protocol} - ${req.ip}`);
            next();
        }else {
            throw new Error('Faild to log');
        }
    }
};

adminRouter.use(loggerWrapper({log:true}));
// adminRouter.use(loggerWrapper({log:false}));

adminRouter.get('/configMiddleware', (req, res)=>{
    res.send('Configureable Middleware');
})
app.use('/admin', adminRouter);

//Simple Middleware

// const myMiddleware = (req, res, next) => {
//     console.log('I am logging');
//     next();
    
// };
// app.use(myMiddleware);
// app.get('/simple', (req, res)=>{
//     res.send('about');
// })



//Application Layer Middleware

// const logger = (req, res, next) => {
//     console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${req.protocol} - ${req.ip}`);
//     console.log('Application Level Middleware');
//     next();
// }

// app.use(logger);
// app.get('/logger', (req, res)=>{
//     res.send('Application L ayer');
// })

//Router Level Middleware

// const logger2 = (req, res, next) => {
//     console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${req.protocol} - ${req.ip}`);
//     console.log('Router Level Middleware');
//     next();
// }

// adminRouter.use(logger2);

// adminRouter.get('/adRouter', (req, res)=>{
//     res.send('Router Level');
// })

// app.use('/admin', adminRouter);

//Error Handling Middleware


// const logger3 = (req, res, next) => {
//     console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${req.protocol} - ${req.ip}`);
//     // console.log('Error Handling Middleware');
//     // next();
//     throw new Error('This is an error');
// };

// adminRouter.use(logger3);

// adminRouter.get('/errHandle', (req, res)=>{
//     res.send('Error Handle');
// });

// app.use('/admin', adminRouter);

// const errorMiddleware = (err, req, res, next) => {
//     console.log(err.massage);
//     res.status(500).send('There was a Error Level');
// };

// adminRouter.use(errorMiddleware);


app.listen(3000, ()=> {
    console.log('listening on port 3000');
});
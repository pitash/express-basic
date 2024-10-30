const express = require('express');
const publicRouter = express.Router();

// const log = (req, res, next) => {
//     console.log('I am Logging');
//     next();
// }

// publicRouter.all('*', log);

// publicRouter.get('/', (req, res) => {
//     res.send('Home');
// });

// publicRouter.param('user', (req, res, next, id) => {
//     req.user = id === '1' ? 'Admin': 'Anonymous';
//     next();
// });
// publicRouter.get('/:user', (req, res) => {
//     res.send(`Hello Public Router ${req.user}`);
// });

// change param behaviour

// publicRouter.param((param, option) => (req, res, next, val) => {
//     if(val === option){
//         next();
//     }else{
//         res.sendStatus(403);
//     }
// } );
// publicRouter.param('user', '12');

// publicRouter.get('/:user', (req, res) => {
//     res.send('Change Param Behaviour');
// });

//router.route()

publicRouter
    .route('/user')
    .all((req, res, next) => {
        console.log('I am Logging');
        next();
    })
    .get((req, res) => {
        res.send('Get');
    })
    .post((req, res) => {
        res.send('POST');
    }),

module.exports = publicRouter;
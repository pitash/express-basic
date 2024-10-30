const express = require('express');
const multer = require('multer');
const path = require('path');

const UPLOADS_FOLDER = './uploads/';

//define the storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
        //Important File.pdf => important-file-3456677.pdf
        const fileExtention = path.extname(file.originalname);
        const filename = file.originalname.replace(fileExtention, '').toLocaleLowerCase().split(' ').join('-') + '-' + Date.now();
        cb(null, filename + fileExtention);
    },
});

var upload = multer({
    // dest: UPLOADS_FOLDER,
    storage: storage,
    limits: {
        fileSize: 1000000, //1MB and its bytes formate
    },
    fileFilter: (req, file, cb) =>{
        // console.log(file);
        if (file.fieldname === "avatar") {
            if (
              file.mimetype === "image/png" ||
              file.mimetype === "image/jpg" ||
              file.mimetype === "image/jpeg"
            ) {
              cb(null, true);
            } else {
              cb(new Error("Only .jpg, .png or .jpeg format allowed!"));
            }
          } else if (file.fieldname === "doc") {
            if (file.mimetype === "application/pdf") {
              cb(null, true);
            } else {
              cb(new Error("Only .pdf format allowed!"));
            }
          } else {
            cb(new Error("There was an unknown error!"));
          }
        },
    });

const app = express();

//For Singel Upload
// app.post('/', upload.single('avatar'), (req, res) => {
//     res.send('Hello World');
// });

//For Multiple Upload
// app.post('/', upload.array('avatar', 3), (req, res) => {
//     res.send('Hello World');
// });

//For Multiple Field Upload (multiple input field)
// app.post('/', upload.fields([
//     {name: 'avatar', maxCount:1 },
//     {name: 'gallery', maxCount:2 },
// ]), (req, res) => {
//     res.send('Hello World');
// });


//For DOC and Image upload
app.post('/', upload.fields([
    {name: 'avatar', maxCount:1 },
    {name: 'doc', maxCount:1 }
]), (req, res) => {
    res.send('Hello World');
});


//default error handler
// app.use((err, req, res, next)=> {
//     if(err){
//         res.status(500).send(err.message);
//     }else{
//         res.send('success');
//     }
// });

//multer err handler
app.use((err, req, res, next) => {
    if(err){
        if(err instanceof multer.MulterError){
            res.status(500).send('There Was Upload Error');
        } else {
            res.status(500).send(err.message);
        }
    }else{
        res.send('Success');
    }
});

app.listen(3000, ()=> {
    console.log('listening on port 3000');
});
const handler = (req, res) => {
    // console.log(req.app.locals.title);
    console.log(req.accepts('json'));
    console.log(req.get('accept')); //Accept -> text/html in headrs
    // console.log(req.app.get('view engine'););
    res.send('This is handler page');
}

module.exports = handler;
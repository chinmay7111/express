const express = require('express');
const app = express();

//it is a middleware 
// app.use(function(req,res,next){
//     console.log('middleware working..');
//     next();
// })
app.use(express.static('./public'));

app.set("view engine","ejs");

app.get('/',function(req,res){
    // res.render("index");
    throw Error("i don't know what happning.....")
})
app.get('/about',function(req,res){
    res.render("about");
})

app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })

// this is called DYNAMIC ROUTING - we use  : at the place where we want to make it dynamic, then access it value we use req.params.name_that_is_give_after_:
app.get('/profile/:username',function(req,res){
    res.send(`it is profile of ${req.params.username}`);
})

app.listen(3000);
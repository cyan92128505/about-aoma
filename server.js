var koa = require('koa');
var serve = require('koa-static');
var router = require('koa-router')();



var app = koa();
app.use(serve(process.cwd()+'/docs'));
app.use(function *(next){
  if(this.path === '/'){
      this.redirect('/index.html');
  }
});


app.listen(3000);

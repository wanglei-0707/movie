var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var serveStatic = require('serve-static');
var mongoStore = require('connect-mongo')(session);
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var app = express();
var dbUrl = 'mongodb://localhost/imooc';
var Router = require('./routes/index');
mongoose.Promise = global.Promise;
mongoose.connect(dbUrl);

app.set('views', './app/views/pages');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({extended:true}));
app.locals.moment = require('moment');
app.use(serveStatic(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(session({
    secret: 'imooc',
    resave: false,
    saveUninitialized: true,
    store: new mongoStore({
        url: dbUrl,
        collection: 'sessions'
    })
}));

var env = process.env.NODE_ENV || 'development';
if(app.get('env') === env){
    app.set('showStackError', true);
    app.locals.pretty = true;
    app.use(morgan('dev'));
    mongoose.set('debug', true);
}

Router(app);

app.listen(port);

console.log('imooc started on port ' + port);

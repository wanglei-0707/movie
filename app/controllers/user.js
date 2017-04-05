var User = require('../models/user');

// sign up
exports.showSignup = function(req, res){
    res.render('signup', {
        title: '注册界面'
    });
};

exports.signup =  function(req, res){
    var _user = req.body.user;

    User.findOne({name: _user.name}, function(err, user){
        if(err){
            console.log(err);
        }
        if(user){
            return res.redirect('/signin');
        }else{
            user = new User(_user);
            user.save(function(err, user){
                if(err){
                    console.log(err);
                }
                res.redirect('/signin');
            });
        }
    });
};

// sign in
exports.showSignin = function(req, res){
    res.render('signin', {
        title: '登录界面'
    });
};

exports.signin = function(req, res){
    var _user = req.body.user;
    var name = _user.name;
    var password = _user.password;
    User.findOne({name: name}, function(err, user){
        if(err){
            console.log(err);
        }
        if(!user){
            return res.redirect('/signup');
        }
        user.comparePassword(password, function(err, isMatch){
            if(err){
                console.log(err);
            }
            if(isMatch){
                req.session.user = user;
                return res.redirect('/');
            }else{
                console.log('password is not matched');
                return res.redirect('/signin');
            }
        });
    });
};

//logout
exports.logout = function(req, res){
    delete req.session.user;
    // delete app.locals.user;
    res.redirect('/');
};

// userlist
exports.list = function(req, res){
    User.fetch(function(err, users){
        if(err){
            console.log(err);
        }
        res.render('userlist', {
            title: '用户列表页',
            users: users
        });
    });
};

// middware
exports.signinRequired = function(req, res, next){
    var _user = req.session.user;
    if(!_user){
        return res.redirect('/signin');
    }
    next();
};
exports.adminRequired = function(req, res, next){
    var _user = req.session.user;
    if(_user.role <= 10){
        return res.redirect('/signin');
    }
    next();
};

var Comment = require('../models/comment');

/* comment */
exports.save = function(req, res){
    var _comment = req.body.comment;
    var movieId = _comment.movie;
    //如果有cid，表明是回复评论，否则是直接评论
    console.log('teeeeeeee');
    console.log(_comment.cid);
    if(_comment.cid){
        console.log('yessssss');
        Comment.findById(_comment.cid, function(err, comment){
            if(err){
                console.log(err);
            }
            var reply = {
                from: _comment.from,
                to: _comment.tid,
                content: _comment.content
            };

            comment.reply.push(reply);

            comment.save(function(err, comment){
                if(err){
                    console.log(err);
                }
                res.redirect('/movie/' + movieId);
            });
        });
    }else{
        console.log('nooooooo');
        var comment = new Comment(_comment);
        comment.save(function(err, comment){
            if(err){
                console.log(err);
            }
            res.redirect('/movie/' + movieId);
        });
    }
};

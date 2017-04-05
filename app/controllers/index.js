var Category = require('../models/category');
var Movie = require('../models/movie');

/* GET home page. */
exports.index = function(req, res){
    Category
        .find()
        .populate({
            path: 'movies',
            select: 'title poster',
            options: {limit: 5}
        })
        .exec(function(err, categories){
            if(err){
                console.log(err);
            }
            res.render('index', {
                title: '首页' ,
                categories: categories
            });
        });
};

/* search page. */
exports.search = function(req, res){
    var catId = req.query.cat;
    var page = parseInt(req.query.p) || 0;
    var q = req.query.q;
    var count = 2;
    var index = page * count;
    if(catId){
        Category
            .find({_id: catId})
            .populate({
                path: 'movies',
                select: 'title poster'
                // options: {limit: count, skip: index}
            })
            .exec(function(err, categories){
                if(err){
                    console.log(err);
                }
                var category = categories[0] || {};
                var movies = category.movies || [];
                var results = movies.slice(index, index + count);
                res.render('results', {
                    title: '结果列表' ,
                    keyword: category.name,
                    movies: results,
                    query: 'cat=' + catId,
                    currentPage: (page + 1),
                    totalPage: Math.ceil(movies.length / count)
                });
            });
    }else{
        Movie
            .find({title: new RegExp((q + '.*'), 'i')})
            .exec(function(err, movies){
                if(err){
                    console.log(err);
                }
                var results = movies.slice(index, index + count);
                res.render('results', {
                    title: '结果列表' ,
                    keyword: q,
                    movies: results,
                    query: q,
                    currentPage: (page + 1),
                    totalPage: Math.ceil(movies.length / count)
                });
            });
    }
};

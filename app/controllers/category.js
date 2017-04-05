var Category = require('../models/category');

/* GET category page. */
exports.new = function(req, res) {
  res.render('category_admin', {
      title: '后台分类录入页',
      category: {name: ''}
  });
};

exports.save = function(req, res){
    var _category = req.body.category;
    var category = new Category(_category);
    category.save(function(err, category){
        if(err){
            console.log(err);
        }
        res.redirect('/admin/category/list');
    });
};

/* GET category list page. */
exports.list = function(req, res) {
    Category.fetch(function(err, catetories){
        if(err){
            console.log(err);
        }
        res.render('category_list', {
            title: '分类列表页' ,
            catetories: catetories
        });
    });
};

/* list delete movie */
exports.del = function(req, res){
    var id = req.query.id;
    console.log(id);
    if(id){
        Movie.remove({_id: id}, function(err, movie){
            if(err){
                console.log(err);
            }else{
                res.json({success: 1});
            }
        });
    }
};

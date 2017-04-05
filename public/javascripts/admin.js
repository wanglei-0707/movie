$(function(){
    $('.del').click(function(e){
        console.log('#########');
        var target = $(e.target);
        var id = target.data('id');
        var tr = $('.item-id-' + id);
        console.log(id);
        $.ajax({
            type: 'DELETE',
            url: '/admin/movie/list?id=' + id
        })
        .done(function(results){
            console.log('doneeee');
            if(results.success === 1){
                if(tr.length > 0){
                    tr.remove();
                }
            }
        });
    });

    $('#DouBan').blur(function(e){
        var id = $(this).val();
        if(id){
            $.ajax({
                url: 'https://api.douban.com/v2/movie/' + id,
                cache: true,
                type: 'get',
                dataType: 'jsonp',
                crossDomain: true,
                jsonp: 'callback',
                success: function(data){
                    $('#inputTitle').val(data.title);
                    $('#inputDoctor').val(data.attrs.director);
                    $('#inputCountry').val(data.attrs.country[0]);
                    $('#inputLanguage').val(data.attrs.language[0]);
                    $('#inputPoster').val(data.image);
                    $('#inputYear').val(data.attrs.year);
                    $('#inputSummary').val(data.summary);
                }
            });
        }
    });
});

// {
//     "rating": {"max": 10, "average": "7.7", "numRaters": 83607, "min": 0},
//     "author": [
//         {"name": "\u83b1\u585e\u00b7\u970d\u5c14\u65af\u9053\u59c6 Lasse Hallstr\u00f6m"}
//     ],
//     "alt_title": "\u4e00\u6761\u72d7\u7684\u4f7f\u547d \/ \u4e3a\u4e86\u4e0e\u4f60\u76f8\u9047(\u53f0)",
//     "image": "https://img1.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2432493858.webp",
//     "title": "A Dog's Purpose",
//     "summary": "\u5f71\u7247\u4ee5\u6c6a\u661f\u4eba\u7684\u89c6\u89d2\u5c55\u73b0\u72d7\u72d7\u548c\u4eba\u7c7b\u7684\u5fae\u5999\u60c5\u611f\uff0c\u4e00\u53ea\u72d7\u72d7\u966a\u4f34\u5c0f\u4e3b\u4eba\u957f\u5927\u6210\u4eba\uff0c\u751a\u81f3\u4e3a\u4ed6\u8ffd\u5230\u4e86\u5973\u670b\u53cb\uff0c\u540e\u6765\u5b83\u5e74\u8fc8\u6b7b\u53bb\u53c8\u8f6c\u4e16\u6295\u80ce\u53d8\u6210\u5176\u4ed6\u6027\u522b\u548c\u7c7b\u578b\u7684\u6c6a\uff0c\u7b2c\u4e8c\u6b21\u8f6e\u56de\u72d7\u72d7\u53d8\u6210\u4e86\u8b66\u72ac\u5a01\u98ce\u51db\u51db\uff0c\u518d\u6b21\u8f6c\u8f6e\u56de\uff0c\u53c8\u6210\u4e86\u966a\u4f34\u4e00\u4f4d\u5355\u8eab\u5973\u9752\u5e74\u7684\u5c0f\u67ef\u57fa\u72ac\u3002\u5728\u7ecf\u5386\u4e86\u591a\u6b21\u8f6e\u56de\u4e4b\u540e\uff0c\u6700\u7ec8\u56de\u5230\u6700\u521d\u7684\u4e3b\u4eba\u8eab\u8fb9\u3002",
//     "attrs": {
//         "website": ["www.adogspurposemovie.com"],
//         "language": ["\u82f1\u8bed"],
//         "pubdate": ["2017-01-27(\u7f8e\u56fd)", "2017-03-03(\u4e2d\u56fd\u5927\u9646)"],
//         "title": ["A Dog's Purpose"],
//         "country": ["\u7f8e\u56fd"],
//         "writer": ["W\u00b7\u5e03\u9c81\u65af\u00b7\u5361\u6885\u4f26 W. Bruce Cameron", "\u51ef\u745f\u7433\u00b7\u8fc8\u514b Cathryn Michon", "\u5965\u9edb\u4e3d\u00b7\u5a01\u5c14\u65af Audrey Wells", "\u739b\u96c5\u00b7\u798f\u5e03\u65af Maya Forbes", "\u6c83\u5229\u00b7\u4e9a\u5386\u65af\u6234\u5c14 Wally Wolodarsky"],
//         "director": ["\u83b1\u585e\u00b7\u970d\u5c14\u65af\u9053\u59c6 Lasse Hallstr\u00f6m"],
//         "cast": ["\u5e03\u4e3d\u7279\u00b7\u7f57\u4f2f\u68ee Britt Robertson", "\u4e39\u5c3c\u65af\u00b7\u594e\u5fb7 Dennis Quaid", "\u4f69\u5409\u00b7\u5229\u666e\u987f Peggy Lipton", "\u4e54\u4ec0\u00b7\u52a0\u5fb7 Josh Gad", "K\u00b7J\u00b7\u963f\u5e15 K.J. Apa", "\u5e03\u83b1\u65af\u00b7\u5409\u624e\u5c14 Bryce Gheisar", "\u6731\u4e3d\u53f6\u00b7\u745e\u5170\u65af Juliet Rylance", "\u5362\u514b\u00b7\u79d1\u6bd4  Luke Kirby", "\u52a0\u5e03\u91cc\u57c3\u5c14\u00b7\u7f57\u65af Gabrielle Rose", "\u8fc8\u514b\u5c14\u00b7\u535a\u592b\u820d\u7ef4\u5c14 Michael Bofshever", "\u6d1b\u6839\u00b7\u7c73\u52d2 Logan Miller", "\u67ef\u6bd4\u00b7\u8c6a\u5384-\u5c14\u5df4\u666e\u8482\u65af\u7279 Kirby Howell-Baptiste", "\u666e\u5947\u00b7\u8c6a\u5c14 Pooch Hall", "\u7ea6\u7ff0\u00b7\u5965\u63d0\u5179 John Ortiz", "\u59ae\u79d1\u5c14\u00b7\u52d2\u666e\u62c9\u5361 Nicole LaPlaca", "\u5f7c\u7279\u00b7\u79d1\u62c9\u7c73\u65af Peter Kelamis", "\u5361\u7f57\u7433\u00b7\u51ef\u8299 Caroline Cave", "\u7b80\u00b7\u8fc8\u514b\u683c\u96f7\u683c Jane McGregor", "\u79d1\u7ef4\u897f\u00b7\u963f\u6885\u626c Kwesi Ameyaw", "\u5361\u7433\u00b7\u535a\u59c6\u62dc\u514b Kalyn Bomback", "\u5a1c\u5965\u7c73\u00b7\u5f17\u4f26\u5185\u7279 Naomi Frenette"],
//         "movie_duration": ["101\u5206\u949f"],
//         "year": ["2017"],
//         "movie_type": ["\u5267\u60c5", "\u559c\u5267", "\u5bb6\u5ead"]
//     },
//     "id": "https:\/\/api.douban.com\/movie\/6873143",
//     "mobile_link": "https:\/\/m.douban.com\/movie\/subject\/6873143\/",
//     "alt": "https:\/\/movie.douban.com\/movie\/6873143",
//     "tags": [{"count": 16640, "name": "\u6e29\u60c5"}, {"count": 16215, "name": "\u72d7"}, {"count": 12315, "name": "\u6cbb\u6108\u7cfb"}, {"count": 11245, "name": "\u52a8\u7269"}, {"count": 9625, "name": "\u611f\u52a8"}, {"count": 9568, "name": "\u611f\u4eba"}, {"count": 7690, "name": "\u7f8e\u56fd"}, {"count": 6205, "name": "2017"}]
// }

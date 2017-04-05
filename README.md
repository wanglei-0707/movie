# node.js项目练习
花了几天的时间跟着慕课网上Scott老师的《node+mongodb建站攻略(一期)》和《node+mongodb建站攻略(二期)》两门课程完成了这个项目，这一遍只是听老师讲，照着敲代码，对很多涉及到的知识没有深入了解，当时想的就是全都过一遍之后，自己再从头啃一遍，深入学习涉及到的所有知识点。估计这课程还会再看一遍两遍。当我看完了第一遍时，对Scott老师充满了敬佩与感谢。整个课程的过程中，他思维敏捷，逻辑清晰，讲的也很详细，当我看到老师也用atom编辑器的时候，对老师的喜爱又多了不止一点点。然后当我看他编辑器用的6到飞起的时候，对老师的敬佩也多了不止一点点。我关注了老师的账号，并点开了老师的主页，看到有他写的两篇手记，于是点开拜读了起来，了解了老师的经历，喝了一碗鸡汤后，就是觉得老师真牛逼！

整个课程下来，我觉得我已经爱上node了~~接下来及时从头开始理知识点，理清楚构建项目的思路！

## bower
安装前台静态框架，Bootstrap，JQuery

配置文件.bowerrc  
```
{'directory: 'public/libs'}  //将需要的框架都安装到这个目录下
```
## grunt grunt-cli
grunt官方推荐grunt不要全局安装，而是安装到项目中，使得每个项目都可以有不一样的版本，为了能用命令行，grunt-cli最好全局安装。ps：开始grunt也全局安装了，运行grunt命令显示没有找到本地grunt。。。。

安装有关的插件
grunt-contrib-watch
grunt-nodemon
grunt-concurrent

```
npm install grunt
npm install grunt-cli -g
npm install grunt-contrib-watch --save-dev
npm install grunt-nodemon --save-dev
npm install grunt-concurrent --save-dev
配置gruntfile.js
grunt
```
## bcrypt
给密码加盐

## body-parser cookie-parser express-session
express 4有很多自带的中间件不再内置了，一些中间件使用方法也不一样了。

原本express自带body-parser,cookie-parser,session,但是现在被取消了，所以需要自己手动安装

connect-mongo使用方式变了，参数改为传session：
```
var mongoStore = require('connect-mongo')(express);
改为
var mongoStore = require('connect-mongo')(session);
```

原本内置的logger被换成morgan，需要手动安装和require。 morgan默认有5中输出格式。express-generator生成的express项目默认使用dev格式, ```app.use(morgan('dev'))```, 输出格式为```:method :url :status :response-time ms - :res[content-length]```

[body-parser 错误](http://www.imooc.com/qadetail/60858)
app.use(bodyParser.urlencoded({extended:true}));

文件上传：原本内置的multipart中间件在4.0中改为connect-multiparty中间件

## mongoose
populate方法

Schema.Types.ObjectId

## 单元测试
mocha
```
npm install grunt-mocha-test --save-dev
```

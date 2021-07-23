const Koa = require('koa');
// const Router = require('koa-router');
// const requirDirctory = require('require-directory'); //动态读取api里定义的路由，不用手写一个个导入
// const router = require('./api/v1/book');
// const book = require('./api/v1/book');
// const classic = require('./api/v1/classic');
const InitManager = require('./app/core/init');
const parser = require('koa-bodyparser');//此插件用途：查看请求中的body
const exception = require('./app/middleware/exception'); //自定义的一个全局抛出对异常处理


// 第一次写，最xx的写法
// app.use(book.routes());
// app.use(classic.routes());

//第二次优化 应用了require-directory插件自动读取api文件下的js文件
const app = new Koa();
// requirDirctory(module, './app/api', {visit: whenLoadMoudule});

// function whenLoadMoudule(obj){
//   if(obj instanceof Router){
//     app.use(obj.routes())
//   }
// }

//第三次优化  把第二步的方法提取到一个文件夹下，直接引用这个启动文件，做到入口文件的最简洁
InitManager.initCore(app);

app.use(parser());
app.use(exception);

app.listen(3000);

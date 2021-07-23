
const Router = require('koa-router');
const requirDirctory = require('require-directory');

class InitManager{
  static initCore(app){
    InitManager.app = app
    InitManager.initLoadRouters()
    // InitManager.loadHttpException()
  }
  static initLoadRouters(){
    //原来
    //1 path config
    //2 使用绝对路径 process.cwd()
    const apiDirectory = `${process.cwd()}/app/api`
    /**
     * apiDirectory 这个参数原来是给了一个相对的路径的写法，这样万一项目目录有所更改就凉了
     * 所以用绝对路径就避免了这种风险
     */
    requirDirctory(module, apiDirectory, {visit: whenLoadMoudule});

    function whenLoadMoudule(obj){
      if(obj instanceof Router){
        InitManager.app.use(obj.routes())
      }
    }

  }

  //将类里的所有子类都放到全局对象里，就不用每次用导入一大堆函数
  //当然些在全局变量里只是省去不用每次用导入的麻烦，但该导入还是导入，写在全局函数里不是最好的解决方案
  static loadHttpException(){
    const error = require('../core/http-exception');
    global.errors = error;
  }
}

module.exports = InitManager
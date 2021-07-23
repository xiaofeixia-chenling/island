const { HttpException } = require("../core/http-exception")

//中间件，都一定会有 上下文ctx对象 和 next对象
const catchError = async (ctx, next)=>{
  //只要throw了error，用try catch就一定能捕获到，
  //所以将这个中间件在app.js入口文件引用就是显示了项目中所有自动throw了的error
  try {
    await next()
  } catch (error) {
    if(error instanceof HttpException){
      ctx.body = {
        msg: error.msg,
        error_code: error.errorCode,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = error.code;
    }
  }
}

module.exports = catchError
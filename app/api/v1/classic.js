const Router = require('koa-router');
const router = new Router();
const {HttpException,  ParameterException} = require('../../core/http-exception');
const {PositiveIdValidator} = require('../../validator/common');

router.post('/v1/:id/classic/latest', (ctx, next)=>{
  const path = ctx.params;
  const query = ctx.request.query;
  const headers = ctx.request.header;
  const body = ctx.request.body;

  //已知错误
  if(!query){
    // const error = new HttpException('为什么错误', 10001, 400);
    const error = new ParameterException();
    throw error
  }

  //未知错误
  const v = new PositiveIdValidator().validate(ctx);
  const id = v.get('path.id');
  const id = v.get('body.b.e.x');

  ctx.body = {key: 'classic'}
});


module.exports = router
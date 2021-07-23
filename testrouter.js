const Koa = require('koa');
const Router = require('koa-router');


const app = new Koa();
const router = new Router();

router.get('/classic/latest', (ctx, next)=>{
  ctx.body = {key: 'classic'}
});

router.post
router.put
router.delete

app.use(router.routes());

// app.use(async (cxt, next)=>{
//   const {path, method} = cxt;
//   console.log(path);
//   console.log(method);
//   if(path === '/classic/latest' && method === 'GET'){
//     cxt.body = {key: 'classic'}
//   }
// })

app.listen(3000);

//api 携带版本号
//1 路径
//2 请求参数
//3 header

//代码开闭原则 尽量新增避免修改
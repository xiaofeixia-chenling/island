const Koa = require('koa')

//目前导入
//commmonJs require ->对应导出-> module.export
//es6       impiot from ->对应导出-> export default
//AMD  xx

// 为什么用 require呢，因为nodejs本身对es6的新特性支持性不是最成熟，
//除非用 babel插件

const app = new Koa()

function test(){
  console.log('hello')
}
//为什么用中间件：接收请求，返回一些内容
//写法一
// app.use(test)

//注册中间件,一个应用程序可以用多个中间件
/**
 * ctx 上下文
 * next 下一个中间件函数
 */
app.use(async (ctx, next)=>{
  console.log('1');
  // const a = await next();
  // a.then((res)=>{
  //   console.log(res)
  // })
  next();
  console.log('2');
})
//await  求值 影响当前线程
//什么样的场景需要等待线程呢？ 读写文件 http请求 访问数据库
app.use(async ()=>{
  console.log('3');
  const axios = require('axios');
  // const start = new Date();
  const res = await axios.get('http://baidu.com'); //假设1min 
  // const end = new Date();
  // console.log(end - start)
  // return 'nimi'
  next();
  console.log('4');
  //await的意义就是把本来异步的调用变成同步的调用
  //结论 async+await是异步的终极解决方案
})

//async await 的基础是 Pormise 解决异步的最佳技术 

app.listen(3000)
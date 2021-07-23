const Sequelize= require('sequelize');
const {dbName,user,password} = require('../config/config').database;

const sequelize = new Sequelize(dbName, user, password,{
  dialect: 'mysql', //mysql数据库要npm install 相关mysql的驱动，不同数据库install不同的驱动
  host,
  port,
  logging:true,
  timezone:'+08:00', //指定北京时间
  define:{

  }
});

module.exports = {sequelize}
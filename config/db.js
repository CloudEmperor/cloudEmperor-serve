const mysql = require("mysql");
//mysql数据库连接配置
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "zhy554971375@",
  database: "cloudemperor" ,//数据库名
  port:'3306'
});
/*
db.connect(function(err){
  if(err){
    console.log('数据库连接失败')
    throw err
  }
});
*/
module.exports=db
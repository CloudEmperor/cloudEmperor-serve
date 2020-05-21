const db=require('../../config/db')

class Admin{
    adminLogin(req, res, next){
        const { userName, passWord } = req.body;
        const sql = 'SELECT * FROM admin_login';
        let off=false;
        let sendData={};
        db.query(sql, function( error, result, fields) {
          if (error) throw error;
          console.log("The result is: ", result);
            result.forEach(item=>{
                if (item.userName === userName && item.passWord === passWord){
                    off=true;
                    sendData = item;
                } else{
                    off=false;
                } 
                
            })
            if (off){
                res.send({
                    status: 200,
                    message: '登录成功',
                    data: sendData
                })
            }else{
                res.send({
                    status: 2,
                    message: '账号或者密码错误',
                    data: {}
                })
            }
        });
        
   }

}


module.exports = new Admin();
const db=require('../../config/db')

class Admin{
    adminLogin(req, res, next){
        console.log(req.body)
        const { userName, passWord } = req.body;
        const sql = 'SELECT * FROM user';
       /* db.query(sql, function( error, result, fields) {
          if (error) throw error;
          console.log("The result is: ", result);
        });*/
        res.send({
            status: 200,
            message: '登录成功',
            data:{
                userName: userName,  //用户名
                id:'11111111111',
                token:'',
                avatar: ''    //用户头像
            }    
        })
   }

}


module.exports = new Admin();
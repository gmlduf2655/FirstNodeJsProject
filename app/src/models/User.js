const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    login(){
        const body = this.body;
        const userInfo = UserStorage.getUserInfo(body.id);
        if(body.id === userInfo.id){
            if(body.pwd === userInfo.pwd){
                return { success : true, msg : "로그인에 성공하셨습니다"};
            }else{
                return { success : false, msg : "비밀번호가 틀렸습니다"};
            }
        }
        return { success : false, msg : "존재하지 않는 아이디입니다"};
    }
}

module.exports = User;
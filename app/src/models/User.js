const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    async login(){
        const client = this.body;
        const userInfo = await UserStorage.getUserInfo(client.id);
        console.log(client);
        console.log(userInfo);
        if(client.id === userInfo.id){
            if(client.pwd === userInfo.pwd){
                return { success : true, msg : "로그인에 성공하셨습니다"};
            }else{
                return { success : false, msg : "비밀번호가 틀렸습니다"};
            }
        }
        return { success : false, msg : "존재하지 않는 아이디입니다"};
    }

    async register(){
        try{
            const client = this.body;
            const response = await UserStorage.save(client);
            return response;
        } catch (err) {
            return {succes : false, msg : err}
        }  
    }
}

module.exports = User;
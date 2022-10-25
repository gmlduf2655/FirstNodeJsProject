const fs = require("fs").promises;
class UserStorage{

    static #getUserList(data, isAll, fields){
        const userList = data;
        if (isAll) { return userList; }
        const newUserList = fields.reduce( (newUserList, field) => {
            if(userList.hasOwnProperty(field)){
                newUserList[field] = userList[field]; 
            }
            return newUserList;
        }, {});
        return newUserList;        
    }

    static getUserList(isAll, ...fields){
        return fs.readFile("./src/databases/here/users.json")
            .then((data) => {
                return this.#getUserList(JSON.parse(data), isAll, fields);
            })
            .catch(err => console.error);
    }
    
    static getUserInfo(id){
        return fs.readFile("./src/databases/here/users.json") 
                .then((data) => {
                    const userList = JSON.parse(data); 
                    const userKeys = Object.keys(userList);
                    const idx = userList.id.indexOf(id);
                    const userInfo = userKeys.reduce((userInfo, key) => {
                        userInfo[key] = userList[key][idx];
                        return userInfo;
                    },{});
                    return userInfo;                   
                })
                .catch(err => console.error)

    }

    static async save(registerData){
        //const userList = this.#userList;
        const userList = await this.getUserList(true);
        if(!userList.id.includes(registerData.id)){
            userList.id.push(registerData.id);
            userList.pwd.push(registerData.pwd);
            userList.name.push(registerData.name);
            fs.writeFile("./src/databases/here/users.json",JSON.stringify(userList));
            return {success : true , msg : "회원가입에 성공하였습니다"}
        }else{
            throw "이미 존재하는 아이디 입니다";
        }
    }
}

module.exports = UserStorage;

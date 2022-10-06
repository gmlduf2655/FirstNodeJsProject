class UserStorage{
    static #userList = {
        id : ["here", "hong", "gang"],
        pwd : ["1234", "12345", "123456"],
        name : ["임희열", "홍길동", "강감찬"]
    }

    static getUserList(...fields){
        const userList = this.#userList;
        const newUserList = fields.reduce( (newUserList, field) => {
            if(userList.hasOwnProperty(field)){
                newUserList[field] = userList[field]; 
            }
            return newUserList;
        }, {});
    }
    
    static getUserInfo(id){
        const userList = this.#userList;
        const userKeys = Object.keys(userList);
        const idx = userList.id.indexOf(id);
        const userInfo = userKeys.reduce((userInfo, key) => {
            userInfo[key] = userList[key][idx];
            return userInfo;
        },{});
        return userInfo;
    }

    static save(data){
        const userList = this.#userList;
        userList.id.push(data.id);
        userList.pwd.push(data.pwd);
        userList.name.push(data.name);
    }
}

module.exports = UserStorage;

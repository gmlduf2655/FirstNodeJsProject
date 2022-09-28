class UserStorage{
    static #userList = {
        id : ["here", "hong", "gang"],
        pwd : ["1234", "12345", "123456"]
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
}

module.exports = UserStorage;

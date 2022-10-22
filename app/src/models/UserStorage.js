const fs = require("fs").promises;
class UserStorage{
    static getUserList(...fields){
        fs.readFile("./src/databases/here/users.json", (err, data) => {
            const userList = JSON.stringify(data); 
            const newUserList = fields.reduce( (newUserList, field) => {
                if(userList.hasOwnProperty(field)){
                    newUserList[field] = userList[field]; 
                }
                return newUserList;
            }, {});
        });
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

    static save(data){
        //const userList = this.#userList;
        //userList.id.push(data.id);
        //userList.pwd.push(data.pwd);
        //userList.name.push(data.name);
    }
}

module.exports = UserStorage;

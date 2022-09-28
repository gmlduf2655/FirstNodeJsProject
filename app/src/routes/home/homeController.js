const output = {

    getIndex : (req, res) => {
        res.render("home/index");
    },

    getLogin : (req, res) => {
        res.render("home/login")
    }
};

const userList = {
    id : ["here", "hong", "gang"],
    pwd : ["1234", "12345", "123456"]
}

const process = {
    postLogin : (req,res) => {
        console.log(req.body);
        const data = req.body;
        if(userList.id.includes(data.id)){
            idx = userList.id.indexOf(data.id);
            if( (userList.pwd)[idx] === data.pwd){
                return res.json({
                    success : true,
                    msg : "로그인에 성공하셨습니다"
                });
            }
        }
        return res.json({
            success : false,
            msg : "로그인에 실패하셨습니다"
        });
    }   
}

module.exports = {
    output,
    process
};


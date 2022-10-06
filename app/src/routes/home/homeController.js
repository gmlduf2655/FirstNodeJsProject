const User = require("../../models/User");

const output = {

    getIndex : (req, res) => {
        res.render("home/index");
    },

    getLogin : (req, res) => {
        res.render("home/login")
    },

    getRegister : (req, res) => {
        res.render("home/register");
    }
};

const process = {
    postLogin : (req,res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
    
    postRegister : (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);        
    }
}

module.exports = {
    output,
    process
};


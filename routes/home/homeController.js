module.exports = {

    getIndex : (req, res) => {
        res.render("home/index");
    },

    getLogin : (req, res) => {
        res.render("home/login")
    }
}


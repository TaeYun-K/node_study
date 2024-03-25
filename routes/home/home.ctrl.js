"use strict";

const hello = (req,res) => {
    res.render("home/index")
}

const login = (req,res) => {
    res.render("home/login")
}

module.exports = {
    hello, // hello : hello 로 key와 같은 값을 자동으로 넣어줌
    login,
}

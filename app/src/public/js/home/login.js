'use strict';

const id = document.querySelector("#id"),
psword = document.querySelector("#psword"),
loginBtn = document.querySelector('button');

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value
    }
    console.log(req)

    fetch("/login", {
        method: "POST",
        headers: {
            "Contend-Type" : "application/json",
        },
        body: JSON.stringify(req) //json 으로 감싼 req
    })

}


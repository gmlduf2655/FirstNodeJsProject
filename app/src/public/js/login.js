console.log("login.js 입니다");

document.addEventListener("DOMContentLoaded", function(){
    const userId = document.querySelector("#userId");
    const userPwd = document.getElementById("userPwd");
    const loginBtn = document.getElementById("loginBtn");

    console.log(loginBtn);
    loginBtn.addEventListener("click", login)

    /*
    const login = () => {
        console.log(userId.value);
        console.log(userPwd.value);
    }
    */
   /*
    function login() {
        console.log(userId.value);
        console.log(userPwd.value);           
    }
    */
    function login() {
        const req = {
            id : userId.value,
            pwd : userPwd.value
        };
        
        fetch("/login", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(req)
        })
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
});
console.log("login.js 입니다");

document.addEventListener("DOMContentLoaded", function(){
    const userId = document.querySelector("#userId");
    const userPwd = document.getElementById("userPwd");
    const loginBtn = document.getElementById("loginBtn");

    console.log(loginBtn);
    loginBtn.addEventListener("click", login)

    // const message = document.querySelector(".message");
    // message.addEventListener('click', function(){
    //     const form = document.querySelector("form");
    //     form.animate({height: "toggle", opacity: "toggle"}, "slow")
    // });

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
        .then((res) => {
            console.log("[응답 결과]");
            console.log(res);
            if(res.success){
                location.href = "/";
            }else{
                alert(res.msg);        
            }
        })
        .catch((err) => {
            console.log(err);
            console.error(new Error("로그인 중 에러발생"));
        });
    }
});
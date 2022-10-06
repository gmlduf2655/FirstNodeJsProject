console.log("register.js 입니다");

document.addEventListener("DOMContentLoaded", function(){
    const userId = document.querySelector("#userId");
    const userPwd = document.getElementById("userPwd");
    const registerBtnBtn = document.getElementById("registerBtn");

    console.log(registerBtn);
    registerBtn.addEventListener("click", register)

    // const message = document.querySelector(".message");
    // message.addEventListener('click', function(){
    //     const form = document.querySelector("form");
    //     form.animate({height: "toggle", opacity: "toggle"}, "slow")
    // });

    function register() {
        const req = {
            id : userId.value,
            pwd : userPwd.value,
            name : userName.value
        };
        
        fetch("/register", {
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
                location.href = "/login";
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
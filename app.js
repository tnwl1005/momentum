const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const getting = document.querySelector("#getting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginBtnClick(){
    const username = loginInput.value;
    if(username ===""){
        alert("Please write your name.")

    } else if(username.length > 15){
        alert("Your name is too long.")
    }
}

function onLoginSubmit (event){
    event.preventDefalult();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("USERNAME_KEY",username);
    paintGreetings(username);    
}
    
// 유저의 이름은 변수로 저장->이름은 h에 넣어줌 

    function paintGreetings(username){
    getting.innerText = `hello $(username)`;
    getting.classList.remove(HIDDEN_CLASSNAME);
    }

const savedUsername = localStorage.getItem("USERNAME_KEY")
  
    if(savedUsername === null){
        //  show the form 
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit",onLoginSubmit);        
    } else{
        // shoe the greetings
        getting.innerText = `hello $(savedUsername)`;
        getting.classList.remove(HIDDEN_CLASSNAME);    
    }


    // ----정리----
    // *target.addEventListener(이벤트명, 함수명(실행))
    // *localStorage.getItem("keyName") 키이름을 전달 / key가 존재하지않은 경우 null 
    // *localStorage.setItem(keyName, keyValue); ->만들고자하는 키이름과 키가 가져올 값

// ㄴ저장된 유저네임(정보)가 없을경우, form을 보여줌/ 유저네임(정보)이 저장된 경우 form 제거
// ㄴ onlogin submit의 function을 만들고, 이 fuction이 하나의 argument를 받도록함 
    // 누군가 form을 submit하면 JS가 onLoginSubmit fuction을 호출
// ㄴpreventDefalult ->funtion에 대해 브라우저가 기본적으로 제공(submit 하면 기본적으로 페이지를 새로고침함)하는것을 막음
//  어떤 정보를 담은 채로 funtion을 호출 ->event object를 인수로 주고있음->정보를 담을 공간을 만들어줌(인수)
// addEventListener안에 있는 함수는 직접 실행하지않음, 브라우저가 실행하는 것 
//  브라우저는 실행뿐만아니라, event에 대한 정보도 담아줌 
// loginButton.addEventListener("click",onLoginBtnClick);
// link.addEventListener("click",handleLinkClick);




// ** 로그인 input에 값을 입력했을때 나타나는 event 
// 1)
// function onLoginBtnClick(){
//     const username = loginInput.value;
//     if(username ===""){
//         alert("Please write your name.")

//     } else if(username.length > 15){
//         alert("Your name is too long.")
//     }
// }

// 2)
// function onLoginBtnClick(){
//     const username = loginInput.value;
//     if(username ===""){
//         alert("Please write your name.")

//     } else if(username.length > 15){
//         alert("Your name is too long.")
//     }
// }

// *Submit 엔터를 누르거나 버튼을 클릭할때 발생
//  form을 submit할 때 입력값을 받아냄 
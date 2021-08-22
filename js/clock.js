const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText =`${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

// setInterval(호출할함수, 호출시간) 특정 시간마다 이벤트를 실행
// setTimeout(호출할함수, 호출시간) 특정 시간마다 이벤트를 실행
// padStart(2, "0") 두글자, 비어있는곳은 0으로 대체 
//  ㄴpadStart :string으로 가져야하는 길이를 2로 설정, 2글자가 아닌경우, 0으로 추가 
// String으로 변환 -> String(date.getHours()).padStart(2."0")
// `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];
// ->할일을 저장 

function saveToDos (){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
// ->todo를 저장/setItem storage객체에 키를 추가하거나, 이미 존재할경우 업데이트함 (keyname,keyvakye)
//   array를 string으로 변환저장

// <---toDo를 삭제하는 기능 --->
function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); 
    saveToDos();
}
// ㄴclick한 타겟 parentElement = li 
//ㄴ 클릭한 li.id와 다른 toDo는 남겨둠 / 클릭한 li.id는 삭제 


// <<---todolist html 만들기-- ->>
function paintToDo(newTodo){
 const li = document.createElement("li");
 li.id = newTodo.id;
 const span = document.createElement("span");
 span.innerText = newTodo.text;
 const button = document.createElement("button");
 button.innerText = "❌";
 button.addEventListener("click", deleteTodo);
 li.appendChild(span);
 li.appendChild(button);
 toDoList.appendChild(li);
}
// ㄴ js로 li , span tag를 생성 / li 자식으로 span을 넣음 / span에 text를 넣음 (값) 
//  li를 화면에 표시 - #todo-list에 li를 넣음 
//  ㄴ appenChild -새로운 노드를 해당 노드의 마지막 자식노드로 추가함 (자식연결)


// <<---list submit 함수--->>
function handleToDosubmit(event){
 event.preventDefault();
 const newTodo = toDoInput.value;
//  ㄴ>input의 value를 새로운 변수에 복사(input값)  
 toDoInput.value = "";
//  ㄴ> input에 값을 입력하고 엔터를 누르면 값이 없어짐 
const newTodoObj = {
    text: newTodo, id:Date.now(),
};
toDos.push(newTodoObj);
paintToDo(newTodoObj);
saveToDos();
}

toDoForm.addEventListener("submit",handleToDosubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}


// return 조건 - 부합하면 삭제,제외/ 다르면 남아있음
// ㄴ true - arr의 모든 item이 유지/새로운 arr와 함께 삭제되지않고 유지 
// * forEach - Array에있는 item(obj)에 대한 함수를 실행해주는 기능 
    //  ㄴ paintToDo 함수를 기본적으로 실행
// * stringify - 저장된 값을 string으로 만듦
// * parse - js에서 사용가능한 object로 만듦


















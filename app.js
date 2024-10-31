const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// const date = new Date().toDateString();
// console.log(date);
// document.getElementById("date").innerHTML=date;

// const time = new Date();
// const hours = time.getHours();
// const minutes=time.getMinutes();
// document.getElementById("time").innerHTML=time;

var today=new Date();
var date = today.getDate()+ '/'+(today.getMonth()+1) + '/' +today.getFullYear();
document.getElementById("date").innerHTML=date;

var now = today.getHours()+ ':'+(today.getMinutes()+1);
document.getElementById("time").innerHTML=now;

function addTask(){
    if(inputBox.value === ''){
        alert("PLEASE WRITE SOMETHING BEFORE CLICKING ENTER");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}


listContainer.addEventListener("click",function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
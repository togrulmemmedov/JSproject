let toDoList = [];  
let addButton = document.querySelector(".button-section");
let inputInfo = document.querySelector("input");
let  sortButton = document.querySelector(".icon-sec");
let ul = document.querySelector("ul");
let list = document.querySelector("body > div > div.list-section > ul");
let temp=0;
addButton.addEventListener('click',activateButton);
sortButton.addEventListener('click',sorList);
// adding list any element
function activateButton(){
    if(inputInfo.value==''){
        alert("You should enter a task");
    } else{
        toDoList.push(inputInfo.value);
        let li = document.createElement("li");
        li.setAttribute('id',toDoList.length+"a");
        li.innerHTML=toDoList[toDoList.length-1]+`<div class="remove" id="${temp+1}" onclick="removeList(this.id)"></div>`;
        ul.appendChild(li);
        inputInfo.value='';
        temp++;
    }
}
// function of Input section button
function clearInput(){
    inputInfo.value='';
}
//remove element from ToDo list
function removeList(list_id){
    let element = document.getElementById(list_id+"a");
    document.getElementById(list_id+"a").remove();
    let index = toDoList.indexOf(element.innerText);
    if(index>-1){
        toDoList.splice(index,1);
    }
}
// sorting list functionality 
function sorList(){
     if(document.querySelector(".active").style.display=="block"){
        document.querySelector(".active").style.display="none";
        document.querySelector(".up").style.display="block";
        list.innerHTML='';
        toDoList.sort();
        for(let i = 0;i<toDoList.length;i++){
            let li = document.createElement("li");
            li.setAttribute('id',i+"a");
            li.innerHTML=toDoList[i]+`<div class="remove" id="${i}" onclick="removeList(this.id)"></div>`;
            ul.appendChild(li);
        }
    }else{
        document.querySelector(".active").style.display="block";
        document.querySelector(".up").style.display="none";
        toDoList.sort().reverse();
        list.innerHTML='';
        for(let i = 0;i<toDoList.length;i++){
            let li = document.createElement("li");
            li.setAttribute('id',i+"a");
            li.innerHTML=toDoList[i]+`<div class="remove" id="${i}" onclick="removeList(this.id)"></div>`;
            ul.appendChild(li);
        }
    }
 }

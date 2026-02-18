const inputInfo = document.getElementById("info");
const addButton = document.getElementById("addBtn");
const contentOnPage = document.getElementById("listDiv");
addButton.addEventListener("click", addHandler);
const setOfData = [];

function dataPusher(data) {
    setOfData.push(data);
    shower();
}
function addHandler(e) {
    e.preventDefault();
    const info = inputInfo.value.trim(); 
    if (info.length < 1) return false;
    dataPusher(info);
    inputInfo.value = null;
}
function shower() {
    contentOnPage.textContent = null;
    setOfData.map((content, index) => {
        const infoDiv = document.createElement("div");
        const newPera = document.createElement("p");
        newPera.textContent = index+1 + " : " + content + "   ";
        newPera.setAttribute("style", "display: inline");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "delete";
        infoDiv.appendChild(newPera);
        infoDiv.appendChild(deleteButton);
        deleteButton.addEventListener("click", (e)=>deleterOfInfo(e, index));
        contentOnPage.appendChild(infoDiv);
    })
}
function deleterOfInfo(event, index) {
    event.preventDefault();
    setOfData.splice(index, 1);
    shower();
    
}
// i didnt clean it yet, i just get command on showing a div with appending two childeren like peragraph element and button, and i today also learned that, delete button with extranal function when clicked, it delete the div, according to index. i also first time use a callback funtion in eventlistner, before this, i only use a extranal function and only write like click, name of function, but in it, i have to pass perameters, and that is called lifting state up, in react, althoug, i dont understand it yet, i mean that lifting state up, but, i did something new, this can be a birthplace of my new understanding of lifting state up, although now its hard to me to form a bridge between lifting state up in react and this call backfuntion in which i passed index. and i dont able to grasp why event is cut by line in code, whatever, it is working, i understand it, i did it without watching a tutorial, or except documention only for splice, now, today task you given is completed, but as, my energy is recharged, if i will have enough time during day, i will be back and do something which make me one step more closer to our crud app, our end goal is, add item, checked done, show listed item, checked done, delete item, checked done, persist in local storage, this is not a big deal, but unchecked, uncompleted, next objective is this, disable button while loading, unchecked, next to next objective, show error, end goal, after this, or may be at state where i persist into local storage, i will start this crud app, to clean, i mean one function one task, one output, somehow, i did it, not fully but partially, you can check and tell me, after i fully cleaned my code, i will make it automatic, means state, logic, renderer, in which state become one object for truth, only renderer touch the dom and logic is only extract data and update state, now tell me, what should i push on github, means should i push this code to track someone how i progress, or when i completed, my cleaing, means renderer, state, logic, part. or should i push like, one is uncleared but fully working, and one is full automatic, same but cleaned and automatic reusable like state, logic, render. you can suggest me. whatever, today task is done, many flaws but task is not clean it, first task is abstract the logic behind the app, i did it, when i achieved push in local storage so even site reloades, our list will be same, then i start to clean, and then i start to automate things, untill then, i will just enjoy abstraction. 
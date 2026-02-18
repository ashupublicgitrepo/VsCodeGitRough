const info = document.getElementById("info");
const infoAddButton = document.getElementById("addInfoBtn");
const contentPage = document.getElementById("contentPage");
const localCleanerButton = document.getElementById("localCleaner");
infoAddButton.addEventListener("click", addHandler);
localCleanerButton.addEventListener("click", cleaner);
const setOfInfo = [];

function localSaver(index, data) {
    localStorage.setItem(index, data);
}
function localDeleter(index) {
    localStorage.removeItem(index+1);
}
function infoPusher(info) {
    setOfInfo.push(info);
    localSaver(setOfInfo.length, setOfInfo[setOfInfo.length - 1]);
    // although i have to mannualy set and send data by .length property.
    renderer();
    //  this infopusher function save data on both, on local variable and on local storage.
    console.log(localStorage);
}
function syncher() {
    if (setOfInfo.length > 0) return false;
    for (const key of Object.keys(localStorage).sort()) {
        if (key != "bot-builder-storage") {
            setOfInfo.push(localStorage.getItem(key));
        };
       
    }
    localStorage.clear();
    // this line clear local storage just after reloading or first time loading, but it first loads from local to current variable, and just after it sync again the local storage so, current page and local storage can be on same layer.  
     setOfInfo.map((element, index) => {
       localSaver(index + 1, element);
     });
    renderer();
   
}
function renderer() {
    contentPage.textContent = null; 
    setOfInfo.map((info, num) => {
        contentPainter(info, num);
    }
    )
}
   
function divDeleter(e, index) {
    e.preventDefault();
    setOfInfo.splice(index, 1);
    localDeleter(index);
    console.log(setOfInfo);
    console.log(localStorage);
    // now to automate this, we need a function which automaticaly call localDeleter and localSaver, whenver we change data in setofInfo.
    renderer();  
}
function addHandler(e) {
    e.preventDefault();
    const data = info.value.trim();
    if (data.length < 1) return false;
    infoPusher(data);
    info.value = null;

}
function contentPainter(info, num) {
            const secDiv = document.createElement("div");
            const textDiv = document.createElement("p");
            const deleteButton = document.createElement("button");
            textDiv.setAttribute("style", "display:inline");
            textDiv.textContent = num + 1 + " " + " " + info;
            deleteButton.textContent = "delete";
            deleteButton.addEventListener("click", (e) => divDeleter(e, num));
            secDiv.appendChild(textDiv);
            secDiv.appendChild(deleteButton);
            contentPage.appendChild(secDiv);
}
function cleaner(e) {
    e.preventDefault();
    localStorage.clear();
}
renderer();
syncher();
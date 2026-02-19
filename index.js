const info = document.getElementById("info");
const infoAddButton = document.getElementById("addInfoBtn");
const contentPage = document.getElementById("contentPage");
infoAddButton.addEventListener("click", addHandler);
const setOfInfo = [];
function init() {
    // if (setOfInfo.length > 0) return false;
    const infoInLocal = localStorage.getItem("info");
    if (infoInLocal) {
        setOfInfo.push(...JSON.parse(infoInLocal));
    }
}
function infoPusher(info) {
    setOfInfo.push(info);
    syncher();
    // although i have to mannualy set and send data by .length property.
    renderer();
    //  this infopusher function save data on both, on local variable and on local storage.
}
function syncher() {
    const stringInfo = JSON.stringify(setOfInfo);
    localStorage.setItem("info", stringInfo);
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
    syncher();
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
init();
renderer();


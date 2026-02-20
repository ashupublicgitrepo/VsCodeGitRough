const info = document.getElementById("info");
const infoAddButton = document.getElementById("addInfoBtn");
const contentPage = document.getElementById("contentPage");
infoAddButton.addEventListener("click", addHandler);
const state = {
    setOfInfo: [],
    isLoading: false,
    errorCode: null,
    // i think i state, there is no need to add setOfInfo, and is loading can be phase of validating and loading and idle, but i dont want to go to that layer, so i am happy with this bonus day. 
}
const errorMap = {
    401: "...loading",
    402: "input is Empty",
    403: "internal server error"
}
function setState(inputInfo, isLoading, errorCode = null, deleteInfo = null) {
    inputInfo?infoPusher(inputInfo):null;
    state.isLoading = isLoading;
    state.errorCode = errorCode;
    deleteInfo!==null?deleterOfInfo(deleteInfo):null;
    syncher();
    renderer();
}
function deleterOfInfo(index) {
    // this is hard, to only use setState to mutate set of info, but let me try
    state.setOfInfo.splice(index, 1);
}
function renderer() {
  
    if (state.isLoading) {
        disabler();
        msgSetter();
    }
    else if (state.errorCode) {
        msgSetter();
        enabler();
    } else {
        enabler();
        contentPage.textContent = null;
        if (state.setOfInfo.length<1) return false;
    state.setOfInfo.map((info, num) => {
    contentPainter(info, num);
  });
    }
    setTimeout(() => {
        info.value = "";
        info.focus();
    }, 0);
 
}
function disabler() {
    info.setAttribute("disabled", true);
    infoAddButton.setAttribute("disabled", true);
}
function enabler() {
    info.removeAttribute("disabled");
    infoAddButton.removeAttribute("disabled");
}
function msgSetter() {
    contentPage.textContent = null;
    contentPage.textContent = errorMap[state.errorCode];
}
function init() {
    // if (setOfInfo.length > 0) return false;
    console.log(localStorage);
    const infoInLocal = localStorage.getItem("info");
    if (infoInLocal) {
        state.setOfInfo.push(...JSON.parse(infoInLocal));
    }
}
function infoPusher(info) {
    state.setOfInfo.push(info);
    syncher();
}
function syncher() {
    const stringInfo = JSON.stringify(state.setOfInfo);
    localStorage.setItem("info", stringInfo);
}

   
function divDeleter(e, index) {
    e.preventDefault();
    setState(null, true, 401, index);
    validator();
    // here we are mutating state without setState function, that is bad, 
    // how i change state from here, with using statesetter, 
    
      
}
function addHandler(e) {
    e.preventDefault();
    if (state.isLoading) return false;
    const data = info.value.trim();
    if (data.length < 1) {
        setState(null, false, 402)
        validator();
    }
    else {
        setState(data, true, 401);
        validator();
    }

}
function contentPainter(info, num) {
            const secDiv = document.createElement("div");
            const textDiv = document.createElement("p");
            const deleteButton = document.createElement("button");
            textDiv.setAttribute("style", "display:inline");
            textDiv.textContent =  info;
            deleteButton.textContent = "delete";
            deleteButton.addEventListener("click", (e) => divDeleter(e, num));
            secDiv.appendChild(textDiv);
            secDiv.appendChild(deleteButton);
            contentPage.appendChild(secDiv);
}
function validator() {
    server().then(() => setState(null, false, null)).catch(err => setState(null, false, 403));
    // since i already passed data into setOfInfo, i can not pass it double time, thats why i send null, but this create a new complexity for syncher. 
}
function server() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, 800);
    })
}
init();
renderer();


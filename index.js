const info = document.getElementById("info");
const infoAddButton = document.getElementById("addInfoBtn");
const contentPage = document.getElementById("contentPage");
const localCleanerButton = document.getElementById("localCleaner");
infoAddButton.addEventListener("click", addHandler);
localCleanerButton.addEventListener("click", cleaner);
const setOfInfo = [];
function localSaver(index, data) {
  localStorage.setItem(index, data);
  renderer();
}
function localDeleter(index) {
  localStorage.removeItem(index);
  renderer();
}
function infoPusher(info) {
  setOfInfo.push(info);
  //    here we only have to save those information which is recieved just now, and not map all the setofinfo again and again, to prevent duplicate key creation,
  localSaver(setOfInfo.length, setOfInfo[setOfInfo.length - 1]);
}

function renderer() {
  contentPage.textContent = null;
  // huston here we have problem, now if we are adding in local storage, it is a object, which has key value pair, now, we passed key as index of our set of info array, so we have to access by key,
  for (const keyNumber of Object.keys(localStorage).sort()) {
    const textValue = localStorage.getItem(keyNumber);

    // the main issue in this code is, first order is not maintained because object.keys return an array, but that array can be random, so i solved it by sort(), but next issue is local storage built in object, we are also iterating over it, and cant able to remove it from,yes i removed by using if statement. today task completed, it seems light but it took me around 3 hours. finelly done.
    if (keyNumber != "bot-builder-storage") {
      const secDiv = document.createElement("div");
      const textDiv = document.createElement("p");
      const deleteButton = document.createElement("button");
      textDiv.setAttribute("style", "display:inline");
      textDiv.textContent = keyNumber + " : " + textValue + "  ";
      deleteButton.textContent = "delete";
      deleteButton.addEventListener("click", (e) => divDeleter(e, keyNumber));
      secDiv.appendChild(textDiv);
      secDiv.appendChild(deleteButton);
      contentPage.appendChild(secDiv);
    }
  }
}

function divDeleter(e, index) {
  e.preventDefault();
  localDeleter(index);
}
function addHandler(e) {
  e.preventDefault();
  const data = info.value.trim();
  if (data.length < 1) return false;
  infoPusher(data);
  info.value = null;
}
function cleaner(e) {
  e.preventDefault();
  localStorage.clear();
  renderer();
}
renderer();

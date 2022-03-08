document.getElementById('go-home-button').addEventListener('click', goHome, false);
function goHome(e) {
window.location="homepage.html";
};
document.getElementById('history-go-back-button').addEventListener('click', goToWheel, false);
function goToWheel(e) {
window.location="wheel.html";
};


function getRestaurantForHistory() {
    var favoriteList = JSON.parse(window.localStorage.getItem("Dinner History")) || [];

    for (var i = 0; i < favoriteList.length; i++) {
        let pText = document.createElement("P");
        pText.innerText = favoriteList[i].name;
        pText.setAttribute("style", "padding: 3px; background-color: #ac5813; border-radius: 5px; color:white; font-size:20px;");

        let dinnerHistoryEl = document.querySelector("#dinnerHistory");
        dinnerHistoryEl.appendChild(pText);
    }

};

function getSpinnerDinnerChoice() {
    var spinnerChoice = JSON.parse(localStorage.getItem("Spinner Random Pick")) || [];

    for (var i = 0; i < spinnerChoice.length; i++) {
        let pText = document.createElement("P");
        pText.innerText = spinnerChoice[i].name;
        pText.setAttribute("style", "padding: 3px; background-color: #ac5813; border-radius: 5px; color:white; font-size:20px;");

        let dinnerHistoryEl = document.querySelector("#dinnerHistory");
        dinnerHistoryEl.appendChild(pText);
    }
};


getSpinnerDinnerChoice()
getRestaurantForHistory()


document.getElementById('dinnerHistory');

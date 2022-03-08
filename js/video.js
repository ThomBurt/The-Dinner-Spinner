document.getElementById('video').addEventListener('ended',myHandler, false);
function myHandler(e) {
window.location="homepage.html";
};

var enterBtnEl = document.querySelector("#enter-button");

enterBtnEl.addEventListener('click', myHandler);
var cityName = document.getElementById('city-name');

//materialize js
$(document).ready(function() {
    $('select').formSelect();
    M.updateTextFields();
    $('.modal').modal();
})


// pulls the restaurant names from local storage and adds them to the list
function getRestaurantNames() {
    let choiceListEl = document.getElementById("choiceDiv");
    choiceListEl.textContent = "";
    var choiceList = JSON.parse(localStorage.getItem("choices")) || [];
    if (choiceList.length > 0) {
        for (let i = 0; i < choiceList.length; i++) {
            const listItem = document.createElement("input");
            listItem.setAttribute("type", "text");
            listItem.setAttribute("readonly", true);
            listItem.setAttribute("class", "input-field btn ");
            listItem.setAttribute("style", "padding: 3px; background-color: #5aa44a; border-radius: 5px; text-align: center;");
            listItem.setAttribute("value", choiceList[i].name);
      
            listItem.addEventListener("click", function () {
                var restaurants = JSON.parse(window.localStorage.getItem("Dinner History")) || [];
                var restaurant = choiceList[i].name;

                //save to local  
                let foundRestaurant = restaurants.find((restaurant) => restaurant.name === restaurant);

                if (foundRestaurant != true) {
                    //only add when not in storage already
                    let newRestaurant = {
                        name: restaurant,
                        //location: cityName,
                        //dateAdded: new Date(),
                    };
                    restaurants.push(newRestaurant);             
                }

                window.localStorage.setItem("Dinner History", JSON.stringify(restaurants));
                $(document).ready(function(){
                    $('#modal3').modal('open');
                 });
            })
            choiceListEl.append(listItem);
        }

    }
}

$(document).ready(function () {
    getRestaurantNames();
    
  });
 




document.getElementById('wheeltoSearchBtn').addEventListener('click',wheeltoSearchClick, false);
function wheeltoSearchClick(e) {
window.location="homepage.html";
};

document.getElementById('wheelToHistoryBtn').addEventListener('click',wheelToHistoryClick, false);
function wheelToHistoryClick(e) {
window.location="dinner-history.html";
};

//Spinner Wheel
// function myfunction() {
// 	var x = 1024;
// 	var y = 9999;
// 	var deg = Math.floor(Math.random() * (x - y)) + y; 
// 	document.getElementById('box').style.transform = "rotate("+deg+"deg)";

// 	var element = document.getElementById('mainbox');
// 	element.classList.remove('animate');
// 	setTimeout(function(){
// 		element.classList.add('animate');
// 		var valueList = ["10","20","50","100","150","200","400","500",];  //used numbers for now 
// 		var getValue = valueList[Math.floor(Math.random() * valueList.length)];
// 		// alert(getValue); 
// 	}, 5000);
//}
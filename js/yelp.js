var searchCity = document.getElementById("search-button");
var currentLoc = document.getElementById("current-location");
// access key for ipstack API
var access_key = "9757c2065dafcf5bb6003830d5868ba4";

// materialize js
$(document).ready(function() {
  $('select').formSelect();
  M.updateTextFields();
})

// API key for yelp
const YELP_API_KEY =
  "j2CXFLVo4ym742wO3zPTwv17xmyhujn1mZgtajH6x53sbCw7lRNzo9JS0eEsosP-51BGGmQewzLrkVU7iEJI4hS7d39rXU9j_-AHuXMtvlPN1na-OdkT23C2CFd_YXYx";

$(searchCity).on("click", function () {
  let category = document.getElementById("category").value;
  let cityName = document.getElementById("city-name").value;


  const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${cityName}"&term=restaurants&categories=${category}`;

  const apiOptions = {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
    },
  };
  
  fetch(url, apiOptions)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.businesses);
        // adds the business name and sliced to 10
        let listOfRestaurants = data.businesses.slice(0, 10);
        clearRestaurantNames();
        var choiceList = [];
        for (var i = 0; i < listOfRestaurants.length; i++) {
          
          let businessName = listOfRestaurants[i].name;

          let newBusinessName = {
            name:businessName
          }
          // adds the list to local storage so it can be used in script.js
          choiceList.push(newBusinessName);
          window.localStorage.setItem("choices",JSON.stringify(choiceList) )
          
          
        }
        // sends the site to wheel.html
        window.location.href = "wheel.html";
      });

      // clears the city search
      cityName="";

});

function clearRestaurantNames() {
  window.localStorage.removeItem("choices");
}

$(currentLoc).click(function() {
    
  // get the API result via jQuery.ajax
  $.ajax({
      url: 'http://api.ipstack.com/check?access_key=' + access_key,   
      dataType: 'jsonp',
      success: function(response) {

          // output object "city"
          console.log(response.city);
          
          
          const city = document.getElementById("city-name");
          city.value = response.city
          
      }
  });

})

// https://cors-anywhere.herokuapp.com/


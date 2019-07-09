var btn = document.querySelector("#btn");
var img = document.querySelector("#avatar");
var divName = document.querySelector("#fullname");
var divUserName = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");
    
var URL = "https://randomuser.me/api/";


// when button is clicked
btn.addEventListener("click", function() {
  fetch(URL)
  .then(handleErrors)
  .then(getJSON)
  .then(updateStuff)
  .catch(printError);
});


function handleErrors(request) {
  if (!request.ok) {
    throw Error(request.status);
  }
  return request;
}

function getJSON(response) {
    // Create an error with the promises resolved data - to json.
    // if .json() is used more than once, an error will be thrown.
    return response.json();
}

function updateStuff(data) {
    img.src = (data.results[0].picture.medium);
    divName.innerHTML = (data.results[0].name.first + " " + data.results[0].name.last);
    divUserName.innerHTML =  (data.results[0].login.username);
    email.innerHTML = (data.results[0].email);
    city.innerHTML = (data.results[0].location.city);
}

function printError(error) {
  console.log("Message - " + error);
}

// Required Vriables
var countryNames = ["USA", "Italy", "Japan", "China", "India"];

//Displaying all 48 Shadow Boxex and the First Five Countties
displayShadowBox();
// Adding the OnClick Highlight Event to all the Containers
addHighlight();
// Making the Country Name Editable on Click
makeEditable();

function displayShadowBox() {
  var shadowBox = "";
  for (let i = 0; i < 48; i++) {
    shadowBox +=
      "<div class='content-container'><div class='shadow-box'></div></div>";
    document.querySelector(".contents").innerHTML = shadowBox;
  }
  // Displaying the First Five Counties
  var fiveCountry = "";
  for (let i = 0; i < countryNames.length; i++) {
    fiveCountry =
      "<div class='shadow-box'><img src='./images/globe.png' class='globe-img'></div><div class='country-name'>" +
      countryNames[i] +
      "</div><button class='edit-button'>...</button>";
    document.querySelectorAll(".content-container")[i].innerHTML = fiveCountry;
  }
}
// On Clicking the Add Country Button Add a Countyr to the Content's and country Name to array
function addCountry() {
  var indexToAdd = countryNames.length;
  var newCountryName = "New_Country";
  document.querySelectorAll(".content-container")[indexToAdd].innerHTML =
    "<div class='shadow-box'><img src='./images/globe.png' class='globe-img'></div><div class='country-name'>" +
    newCountryName +
    "</div><button class='edit-button'>...</button>";
  countryNames[indexToAdd] = newCountryName;

  newHighlight(indexToAdd);
  makeEditable();
}
// On Clicking the threeDots make the content editable and Pressing Enter will make editable false
function makeEditable() {
  for (var i = 0; i < countryNames.length; i++) {
    document
      .querySelectorAll(".edit-button")
      [i].addEventListener("click", function() {
        this.parentElement
          .querySelector(".country-name")
          .setAttribute("contenteditable", "true");

        this.parentElement.querySelector(".country-name").focus();

        this.parentElement
          .querySelector(".country-name")
          .addEventListener("keypress", enterPress);

        function enterPress() {
          if (event.keyCode === 13) {
            this.setAttribute("contenteditable", "false");
          }
        }
      });
  }
}
// Adds Highlight to everycontent
function addHighlight() {
  document
    .querySelectorAll(".content-container")[0]
    .querySelector(".shadow-box")
    .classList.add("highlight");

  for (let i = 0; i < countryNames.length; i++) {
    document
      .querySelectorAll(".content-container")
      [i].addEventListener("click", function() {
        this.querySelector(".shadow-box").classList.toggle("highlight");
      });
  }
}
function newHighlight(i) {
  document
    .querySelectorAll(".content-container")
    [i].addEventListener("click", function() {
      this.querySelector(".shadow-box").classList.toggle("highlight");
    });
}
// Deleting
function delCountry() {
  var contentContainer = document.querySelectorAll(".content-container");
  for (let i = contentContainer.length; i--; ) {
    if (
      contentContainer[i]
        .querySelector(".shadow-box")
        .classList.contains("highlight")
    ) {
      countryNameToRemove = contentContainer[i].querySelector(".country-name")
        .innerText;
      var indexOfArrayToRemove = countryNames.indexOf(countryNameToRemove);
      countryNames.splice(indexOfArrayToRemove, 1);
      contentContainer[i].remove();
    }
  }
}

//Search Function
function searchCountry() {
  var searchText,
    filter,
    countryNames,
    indexOfCountryName,
    i,
    indexOfContentContainer;
  searchText = document.querySelector("#searchBox");
  filter = searchText.value.toUpperCase();
  indexOfContentContainer = document.querySelectorAll(".content-container");

  countryNames = document.querySelectorAll(".country-name");

  for (i = 0; i < countryNames.length; i++) {
    indexOfCountryName = countryNames[i];

    if (indexOfCountryName.innerHTML.toUpperCase().indexOf(filter) > -1) {
      indexOfContentContainer[i].style.display = "";
    } else {
      indexOfContentContainer[i].style.display = "none";
    }
  }
}

// The Search Bar Functionality
function searchBoxActive(x) {
  searchBoxID = document.getElementById(x);
  searchBoxID.placeholder = "";
  searchBoxID.classList.add("search-left");
}
function searchBoxInActive(x) {
  searchBoxID = document.getElementById(x);
  searchBoxID.placeholder = "MY ITEMS";
  searchBoxID.classList.remove("search-left");
}

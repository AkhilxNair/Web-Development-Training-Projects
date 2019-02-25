//DATABASE 
var projectData = [
    ["Fernando Abbott 866", 62, 100, 5, "Residential"],
    ["AM House", 72, 150, 2, "Commercial"],
    ["Fortaleza Photography Museum", 50, 70, 10, "Commercial"],
    ["Adelaide Previdi Corporate", 90, 190, 7, "Commercial"],
    ["Casa America Building", 40, 120, 10, "Residential"],
    ["Quest MM18 Arquiteyura", 95, 200, 1, "Residential"]
];

// Area Slider
var areaRange = document.getElementById("areaRange");
var areaValue = document.getElementById("areaValue");
areaValue.innerHTML = areaRange.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
areaRange.oninput = function () {
    areaValue.innerHTML = this.value;
}

// Age Slider
var ageRange = document.getElementById("ageRange");
var ageValue = document.getElementById("ageValue");
ageValue.innerHTML = ageRange.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
ageRange.oninput = function () {
    ageValue.innerHTML = this.value;
}

// Price Slider
var priceRange = document.getElementById("priceRange");
var priceValue = document.getElementById("priceValue");
priceValue.innerHTML = priceRange.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
priceRange.oninput = function () {
    priceValue.innerHTML = this.value;
}

// CREATING TABLE and Displaying it 
table = document.getElementById("table");    
for (var i = 1; i < table.rows.length; i++) {  // rows       
    for (var j = 0; j < table.rows[i].cells.length; j++) {  // cells
        table.rows[i].cells[j].innerHTML = projectData[i - 1][j] + table.rows[i].cells[j].innerHTML;
    }
} 

// ON BUTTON CLICK EVENTS 
// Area Button Click
document.getElementById('areaButton').addEventListener('click', function () {   
    this.classList.toggle('activeButton');  // Toggles Class
    sliderFilter();
// Live Filter. When Dragging the Slide ( Requires the  Button to be On)
    document.getElementById('areaRange').addEventListener('click', function(){
        if(document.getElementById('areaButton').classList.contains('activeButton')){             
            sliderFilter();  
        };})  
    });


// Age Button Click
document.getElementById('ageButton').addEventListener('click', function () {
    this.classList.toggle('activeButton'); // Toggles Class      
        sliderFilter(3);
// Live Filter. When Dragging the Slide ( Requires the  Button to be On)  
    document.getElementById('ageRange').addEventListener('click', function(){
        if(document.getElementById('ageButton').classList.contains('activeButton')){             
            sliderFilter();  
        };})     
    });

// PRICE BUTTON CLICK 
document.getElementById('priceButton').addEventListener('click', function () {     
    this.classList.toggle('activeButton');    // Toggles Class
        sliderFilter();
// Live Filter. When Dragging the Slide ( Requires the  Button to be On)
    document.getElementById('priceRange').addEventListener('click', function(){
        if(document.getElementById('priceButton').classList.contains('activeButton')){ 
            sliderFilter();  
        };})       
    });

//CATEGORY BUTTON CLICK

//Required Variable Assignment
var residentialBox = document.getElementById("residential");
var commercialBox = document.getElementById("commercial");

document.getElementById('categoryButton').addEventListener('click', function () {
    this.classList.toggle('activeButton'); // Toggles Class
    sliderFilter();
});

// MAIN FILTER
function sliderFilter(){
    
    var activePrice = document.getElementById('priceButton').classList.contains('activeButton') // Returns True or False
    var activeArea = document.getElementById('areaButton').classList.contains('activeButton') // Returns True or False
    var activeAge = document.getElementById('ageButton').classList.contains('activeButton')   // Returns True or False
    var activeCategoty = document.getElementById('categoryButton').classList.contains('activeButton') // Returns True or False


    for (var x = 1; x < table.rows.length; x++) {   
        table.rows[x].style.display = "";   

        if((activePrice && (parseFloat(table.rows[x].cells[1].innerHTML) >parseFloat(priceValue.innerHTML))) ||
        (activeArea && (parseFloat(table.rows[x].cells[2].innerHTML) >parseFloat(areaValue.innerHTML))) ||
        (activeAge && (parseFloat(table.rows[x].cells[3].innerHTML) >parseFloat(ageValue.innerHTML))) ||
        (activeCategoty && ((residentialBox.checked == true) && table.rows[x].cells[4].innerHTML == "Commercial" )) ||
        (activeCategoty && ((commercialBox.checked == true) && table.rows[x].cells[4].innerHTML == "Residential" ))

        ){
            table.rows[x].style.display = "none";   
        }   
        
        if(activeCategoty && ((residentialBox.checked == true)&&(commercialBox.checked == true))){
            table.rows[x].style.display = "";   
            if((activePrice && (parseFloat(table.rows[x].cells[1].innerHTML) >parseFloat(priceValue.innerHTML))) ||
            (activeArea && (parseFloat(table.rows[x].cells[2].innerHTML) >parseFloat(areaValue.innerHTML))) ||
            (activeAge && (parseFloat(table.rows[x].cells[3].innerHTML) >parseFloat(ageValue.innerHTML))))
            {
                table.rows[x].style.display = "none";   
            }
        }
    }
}
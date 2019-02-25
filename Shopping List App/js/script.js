// VARIABLE DECLARATION 

var myNodelist = document.getElementsByTagName("li");
var close = document.getElementsByClassName("close");


// newElement Function will Get Called when Enter is Clicked
function newElement() {
    var inputValue = document.getElementById("myInput").value;

    // If the List Contains One or More Items then then IF statement is executed 
    if (myNodelist.length > 0) {
        var flag = false;
        //Checking if the Enter Value is Found in the List
        for (var i = 0; i < myNodelist.length; i++) {
            var div = myNodelist[i].getElementsByTagName("div")[0];
            if (inputValue == div.innerHTML) {
                alert("You Cannot Insert Duplicate Value")
                flag = true;
            }
        }
        if (!flag) {
            creatingListItem();
        }

        // If List is New and contains Zero Items then an Item is Added
    } else {
        creatingListItem();
    }
}


// This Function Creates a New List Item and Adds the Close Button 
function creatingListItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createElement("div");
    t.innerText = inputValue;
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    // Erases the Enter Text Box after Pressing NEter 
    document.getElementById("myInput").value = "";

    // On Double Clicking a List Item It Becomes Editable
    t.addEventListener("dblclick", editScript);

    function editScript() {
        t.setAttribute("contenteditable", "true");

        // Content Editable set to false after pressing Enter
        t.addEventListener("keypress", enterPress2);

        function enterPress2() {
            if (event.keyCode === 13) {
                document.getElementById("myInput").focus();
                t.setAttribute("contenteditable", "false");
            }
        }
    }

    // Adding Close Button to LI 
    var span = document.createElement("div");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    // Closing Function
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.remove(this);
        }
    }
}



// Inputting with Enter Key

var inputValue = document.getElementById("myInput");
inputValue.addEventListener("keypress", enterPress);

function enterPress(event) {
    if (event.keyCode === 13) {
        newElement();
    }
}


// SearchBox
function mySearch() {
    var searchText, filter, ul, li, i;
    searchText = document.getElementById("mySearch");
    filter = searchText.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        indexOfLi = li[i];
        var div = indexOfLi.getElementsByTagName("div")[0];
        console.log(div);
        if (div.innerHTML.toUpperCase().indexOf(filter) > -1) {
            indexOfLi.style.display = "";
        } else {
            indexOfLi.style.display = "none";
        }
    }
}


// Sorting
function sortList() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("myUL");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        b = list.getElementsByTagName("li");

        //Loop through all list-items:
        for (i = 0; i < (b.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*check if the next item should
            switch place with the current item:*/
            if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                /*if next item is alphabetically
                lower than current item, mark as a switch
                and break the loop:*/
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark the switch as done:*/
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }
}
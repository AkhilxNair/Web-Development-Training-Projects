function element(element) {
  if (element.charAt(0) === "#") { // If passed an ID...
    return document.querySelector(element); // ... returns single element
  }
  return document.querySelectorAll(element); // Otherwise, returns a nodelist
};

// Variables
  var viewer = element("#viewer"); // Calculator screen where result is displayed
  var equals = element("#equals"); // Equal button
  var nums = element(".num"); // List of numbers
  var ops = element(".ops"); // List of operators
  var theNum = ""; // Current number
  var oldNum = ""; // First number
  var resultNum = "0"; // Result
  var operator; // Operator  
  var firstScreen = element("#first-smallscreen"); // First Small Screen
  var operatorScreen = element("#operator-smallscreen"); // Small Operator Screen
  var secondScreen = element("#second-smallscreen"); // Second Small Screen
  var firstOperand, secondOperand; 

  function isNumber(evt) {   
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
        return false;
    return true;    
}
viewer.innerHTML = resultNum; // Display current number 

function main() {  
  // When: Number is clicked. Get the current number selected
  function setNum() { 
    if (resultNum) { // If a result was displayed, reset number
      resultNum = "";
      theNum = this.getAttribute("data-num"); 
    } else { // Otherwise, add digit to previous number (this is a string!)
      theNum = firstScreen.innerHTML+ this.getAttribute("data-num");
    }  

    if(oldNum == ""){
      firstScreen.innerHTML = theNum;
    } else{
      theNum = secondScreen.innerHTML+ this.getAttribute("data-num");
      secondScreen.innerHTML = theNum;      
    }       
  };

  // When: Operator is clicked. Pass number to oldNum and save operator
  function moveNum() {     
      if(!firstScreen.innerHTML =="" ) {
        secondScreen.setAttribute("contenteditable", "true"); 
        //1
        if(!operator && parseFloat(firstScreen.innerHTML) ){
          oldNum = parseFloat(firstScreen.innerHTML);              
          theNum = "";
          }
       //2
        operator = this.getAttribute("data-ops");    
        //3

      //Displaying Operators
      switch (operator) {
        case "plus":        
          operatorScreen.innerHTML = "+";
          break;
  
        case "minus":  
          operatorScreen.innerHTML = "-";
          break;
  
        case "times":        
          operatorScreen.innerHTML = "x";
          break;
  
        case "divided by":     
          operatorScreen.innerHTML = "/";
          break;   
      }    
      }      
  };

  // When: Equals is clicked. Calculate result
 function displayNum() {
    // Convert string input to numbers
    if(!firstScreen.innerHTML == "" && !secondScreen.innerHTML ==""){
      oldNum = parseFloat(oldNum);
      theNum = parseFloat(theNum);   

      firstOperand = parseFloat(firstScreen.innerHTML);
     
      secondOperand = parseFloat(secondScreen.innerHTML)
  
      // Perform Operations
      switch (operator) {
        case "plus":
          resultNum = firstOperand + secondOperand;
          break;
  
        case "minus":
          resultNum = firstOperand - secondOperand;      
          break;
  
        case "times":
          resultNum = firstOperand * secondOperand;        
          break;
  
        case "divided by":
          resultNum = firstOperand / secondOperand;      
          break;
  
          // If equal is pressed without an operator, keep number and continue
        default:
          resultNum = theNum;     
        }
  
      firstScreen.innerHTML = resultNum;
      secondScreen.innerHTML ="";
      operatorScreen.innerHTML =""
      operator = undefined;
  
      // Display result, finally!
      viewer.innerHTML = resultNum;
  
      // Now reset oldNum & keep result
      oldNum = 0;
      theNum = resultNum;
    } else{
      viewer.innerHTML = "Enter  Number"
    }
    secondScreen.setAttribute("contenteditable", "false"); 
  };

  // When: Clear button is pressed. Clear everything
  function clearAll() {
    oldNum = "";
    theNum = "";
    viewer.innerHTML = "0";
    firstScreen.innerHTML = operatorScreen.innerHTML = secondScreen.innerHTML = ""; // ALL 3 Assigned - Dont Confuse
    operator = undefined;    
    firstOperand ="";
    secondOperand ="";
    secondScreen.setAttribute("contenteditable", "false");
  };

  
  // Add click event to numbers
for (var i = 0; i < nums.length; i++) {
  nums[i].onclick = setNum;
}

  // Add click event to operators
for (var i = 0; i < ops.length; i++) {
  ops[i].onclick = moveNum;
}

// Add click event to equal sign
  equals.onclick = displayNum;

// Add click event to clear button
element("#clear").onclick = clearAll; 
};

main(); // CALLING EVERYTHING
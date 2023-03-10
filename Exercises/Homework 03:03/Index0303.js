// Declaring Variables 
let bkgCounter = 0;
let mainDivCounter = 0;
let textCounter = 0;

// Let counterTotal = bkgCounter + mainDivCounter + textCounter -> better way to code

// Buttons variables 
let bkgBtn = document.getElementById("bkg-btn");
let divBtn = document.getElementById("div-btn");
let textBtn = document.getElementById("text-btn");
// let total = document.getElementById("Total") -> to use with above suggested code 

// Establishing the other Id's 
let total = document.getElementById("total");
let mainDiv = document.getElementById("mainDiv");
let text = document.getElementById("text");


// Button 1 
bkgBtn.addEventListener("click", ()=>{
	bkgCounter+=1;  
    // at click, it adds one to the pre-established value
	document.body.style.backgroundColor = "rgb(128, 206, 225)"
    // Changing background color 
    bkgBtn.innerHTML = "Pressed " + bkgCounter + " times" 
    // This showcases how many times the button has been pressed on the button 
	total.innerHTML = bkgCounter + mainDivCounter + textCounter;
    // Calculates the total no. of times buttons have been pressed 
})

let boolOne = true; 


divBtn.addEventListener("click", ()=>{
	mainDivCounter+=1;
    divBtn. innerHTML = "Pressed " + mainDivCounter + " times"
    mainDiv.style.backgroundColor = "rgb(242, 184, 216)";
    mainDiv.style.fontSize = "5vw";
      // Changing the fontsize of the div 
	mainDiv.style.width = "40vw";
	mainDiv.style.height = "40vw";
      // Changing the dimensions of the div 
	total.innerHTML = bkgCounter + mainDivCounter + textCounter;

    if(boolOne) {
        // essentially a shorthand way of saying is bool1 is true. "if(!boolOne)" is saying bool one is false 

        mainDiv.style.opacity = 0.4
        // mainDiv.style.backgroundColor = "rgb(" +  bkgCounter * 10 +",128 , 0" -> example of combinations of variables and features 

    }  else{
        mainDiv.style.opacity = 1
        // mainDiv.style.backgroundColor = "rgb( 42, 184, 216 )" ->  continuation of previous example 
    }

    boolOne =! boolOne

})


textBtn.addEventListener("click", ()=>{
	textCounter+=1;
    textBtn. innerHTML = "Pressed " + textCounter + " times"
	text.append("hello ")
    //The append function takes the word as an argument and adds it to the end of an existing list
	total.innerHTML = bkgCounter + mainDivCounter + textCounter;
})
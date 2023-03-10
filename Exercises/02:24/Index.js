// Creating variables
let numberVar = 0
let slaylDiv = document.getElementById("slayDiv") 
let buttonOne = document.getElementById("buttonOne") 
let buttonBull = true

let foodArray = ["waffles", "tacos", "red curry", "vada pav", "burritos"]

console.log(foodArray[0]) 

buttonOne.addEventListener("click", ()=>{

slaylDiv.innerHTML = " My favourite food is " + foodArray[numberVar]

numberVar+=1 
buttonOne.innerHTML = "this button has been pressed" + numberVar + "times!"

if(numberVar > foodArray.length -1) {
numberVar = 0
}

})









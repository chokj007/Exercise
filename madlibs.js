// declared a noun button that refers to a button with a distinct id in our HTML
let nounSpan = document.getElementById ('nounSpan')
let verbSpan = document.getElementById ('verbSpan')
let adjectiveSpan = document.getElementById ('adjectiveSpan')
let eventSpan = document.getElementById ('eventSpan')

// Created arrays
let nounArray = [ "Cloud", "Pizza", "Jello", "Spatula", "Toe nail", "Donut", "Toilet Paper", "Monkey", "Cowboy hat", "Rainbows"]
let verbArray = [ "shitting", "walking", "burning", "breaking", "knitting", "breathing", "vomiting", "slaying", "squatting"]
let adjectiveArray = [ "colorful", "gnarly", "snobby", "dynamic", "whimsical", "zealous", "groggy", "wrongheadedly", "loquacious"]
let eventArray = [ "the anti-christ spawned", "people coughed mothballs", "hair started growing on peoples' nose", "platypus' grew thumbs", "my puppies stacked on each other to make a transformer", "zaza", "the world pixelated ", "the floor was lava", "god died"]


// Declared the counters, and given it a value of 0.
let nounCounter = 0
let verbCounter = 0
let adjectiveCounter = 0
let eventCounter = 0


nounSpan.addEventListener ('click', ()=> {

nounSpan.innerHTML = nounArray[nounCounter]
// Essentially, on a click, the element will cycle through the arrays
nounCounter++ 

if(nounCounter > nounArray.length -1) {
    nounCounter = 0
    }

})

verbSpan.addEventListener ('click', ()=> {

    verbSpan.innerHTML = verbArray[verbCounter]
    verbCounter++ 
    
    if(verbCounter > verbArray.length -1) {
        verbCounter = 0
        }
    
    })

adjectiveSpan.addEventListener ('click', ()=> {

    adjectiveSpan.innerHTML = adjectiveArray[adjectiveCounter]
    adjectiveCounter++ 
    
    if(adjectiveCounter > adjectiveArray.length -1) {
        adjectiveCounter = 0
        }
    
    })

    eventSpan.addEventListener ('click', ()=> {

        eventSpan.innerHTML = eventArray[eventCounter]
        eventCounter++ 
        
        if(eventCounter > eventArray.length -1) {
            eventCounter = 0
            }
        
        })
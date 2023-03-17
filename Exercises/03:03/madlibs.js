// declared a noun button that refers to a button with a distinct id in our HTML
let nounSpan = document.getElementById ('nounSpan')
let nounSpan2 = document.getElementById ('nounSpan2')
let nounSpan3 = document.getElementById ('nounSpan3')
let nounSpan4 = document.getElementById ('nounSpan4')

let verbSpan = document.getElementById ('verbSpan')
let verbSpan2 = document.getElementById ('verbSpan2')
let verbSpan3 = document.getElementById ('verbSpan3')

let adjectiveSpan = document.getElementById ('adjectiveSpan')
let adjectiveSpan2 = document.getElementById ('adjectiveSpan2')
let adjectiveSpan3 = document.getElementById ('adjectiveSpan3')

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


// NOUN SPANS

nounSpan.addEventListener ('click', ()=> {

nounSpan.innerHTML = nounArray[nounCounter]
// Essentially, on a click, the element will cycle through the arrays
nounCounter++ 

if(nounCounter > nounArray.length -1) {
    nounCounter = 0
    }

})

nounSpan2.addEventListener ('click', ()=> {

    nounSpan2.innerHTML = nounArray[nounCounter]
    // Essentially, on a click, the element will cycle through the arrays
    nounCounter++ 
    
    if(nounCounter > nounArray.length -1) {
        nounCounter = 0
        }
    
    })

    nounSpan3.addEventListener ('click', ()=> {

        nounSpan3.innerHTML = nounArray[nounCounter]
        // Essentially, on a click, the element will cycle through the arrays
        nounCounter++ 
        
        if(nounCounter > nounArray.length -1) {
            nounCounter = 0
            }
        
        })

        nounSpan4.addEventListener ('click', ()=> {

            nounSpan4.innerHTML = nounArray[nounCounter]
            // Essentially, on a click, the element will cycle through the arrays
            nounCounter++ 
            
            if(nounCounter > nounArray.length -1) {
                nounCounter = 0
                }
            
            })

    
// VERB SPANS

verbSpan.addEventListener ('click', ()=> {

    verbSpan.innerHTML = verbArray[verbCounter]
    verbCounter++ 
    
    if(verbCounter > verbArray.length -1) {
        verbCounter = 0
        }
    
    })

    verbSpan2.addEventListener ('click', ()=> {

        verbSpan2.innerHTML = verbArray[verbCounter]
        verbCounter++ 
        
        if(verbCounter > verbArray.length -1) {
            verbCounter = 0
            }
        
        })

        verbSpan3.addEventListener ('click', ()=> {

            verbSpan3.innerHTML = verbArray[verbCounter]
            verbCounter++ 
            
            if(verbCounter > verbArray.length -1) {
                verbCounter = 0
                }
            
            })


            // ADJECTIVE SPANS

adjectiveSpan.addEventListener ('click', ()=> {

    adjectiveSpan.innerHTML = adjectiveArray[adjectiveCounter]
    adjectiveCounter++ 
    
    if(adjectiveCounter > adjectiveArray.length -1) {
        adjectiveCounter = 0
        }
    
    })

    adjectiveSpan2.addEventListener ('click', ()=> {

        adjectiveSpan2.innerHTML = adjectiveArray[adjectiveCounter]
        adjectiveCounter++ 
        
        if(adjectiveCounter > adjectiveArray.length -1) {
            adjectiveCounter = 0
            }
        
        })

        adjectiveSpan3.addEventListener ('click', ()=> {

            adjectiveSpan3.innerHTML = adjectiveArray[adjectiveCounter]
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
fetch("items copy.json")
.then(function(response){
   return response.json();
})
.then(function(items){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let item of items){
      out += `
         
      <div class="style">
            <div id="name">${item.name}</div>
            <div id="image"><img src='${item.image}'</div>
            <div id="reasonforstupidty">${item.reasonForStupidity}</div>
         </div>
      `;
   }
 
   placeholder.innerHTML = out;
});

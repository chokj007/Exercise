
fetch("items.json")
.then(function(response){
   return response.json();
})
.then(function(items){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let item of items){
      out += `
         <tr>
            <td>${item.name}</td>
            <td>${item.location}</td>
            <td>${item.animalType}</td>
            <td>${item.stupidFrom1_10}</td>
            <td><img src='${item.image}'</td>
            <td>${item.reasonForStupidity}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});
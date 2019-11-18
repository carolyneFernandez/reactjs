document.querySelector("button").addEventListener('click',comprobar);


function comprobar()
{
  var content=document.querySelector(".content");
  
   var fistname = document.querySelector("#firstname").value;
   var lastname = document.querySelector("#lastname").value;

   console.log(fistname);
   console.log(lastname);
   content.innerHTML = "Bonjour "+fistname+" "+lastname;
}
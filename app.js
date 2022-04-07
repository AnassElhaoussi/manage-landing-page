

 const checkEmailValidation = () => {
    const form = document.getElementById("form")
    const email = document.getElementById("enter-email").value
    const text = document.getElementById("text")
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/



    
 if (email.match(pattern)){
    form.classList.add("valid")
    form.classList.remove("invalid")
 
 
    text.innerHTML = "Your email adress is valid !"
    text.style.color = "#00ff00"
    
 }
 
 

 
 
 else {
    form.classList.add("invalid")
    form.classList.remove("invalid")
 
    text.innerHTML = "Please enter a valid email adress !"
    text.style.color = "#ff0000"
 }


 if(email === ""){
    text.innerHTML = ""
   }
   


 
 }


 checkEmailValidation()



const checkActiveButton = () => {
   const hamburger = document.querySelector(".hamburger")
   const links = document.querySelector(".links")
   

   hamburger.addEventListener('click', function(){
      links.classList.toggle("isactive")
      links.style.animation = "navAnimation 0.3s ease"
   })
}


checkActiveButton()
 

 
 
 










 


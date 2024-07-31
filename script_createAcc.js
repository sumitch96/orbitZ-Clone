let email=document.getElementById("inp1")
let password=document.getElementById("inp4")
let submit=document.getElementById("inp3")
let fname=document.getElementById("inp5")
let lname=document.getElementById("inp6")
submit.addEventListener('click',function(event){
    event.preventDefault();
  
    let userDetails={
        email:email.value,
         first_name: fname.value,
        last_name: lname.value,
        password:password.value
    };
   
    localStorage.setItem("userdetails" , JSON.stringify(userDetails))
   
    alert("Account created successfully you can sign-in")
   window.location.href="./index.html"
})

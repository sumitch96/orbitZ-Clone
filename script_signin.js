let form =document.getElementById("form")
let email=document.getElementById("inp1")
let password=document.getElementById("inp4")
let submit=document.getElementById("inp3")
let fname=document.getElementById("inp5")
let lname=document.getElementById("inp6")
submit.addEventListener('click',function(event){
    event.preventDefault();
   
    let userDetails={
        email:email.value,
    //    first_name: fname.value,
    //     last_name: lname.value,
        password:password.value,
    };
  
    let savedDetails = JSON.parse(localStorage.getItem("userdetails") ||{});
   console.log(savedDetails)
   if(userDetails.email===savedDetails.email && userDetails.password===savedDetails.password)
   {
    localStorage.setItem("isAuth","Authenticated")
    alert("Login Success!")
   window.location.href="./index.html"
   }
   else
   {
    alert("Wrong credentials")
   }
})

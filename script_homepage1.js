let pageloc=document.getElementById("pgloc")

let isAuth=localStorage.getItem("isAuth") || "Not Authenticated"
pageloc.addEventListener('click',function(e)
{
    e.preventDefault();
   
    if(isAuth !=="Authenticated")
    {
        window.location.href="./trips.html" 
    }
    else
    {
         window.location.href="./bookTrips.html"
    }

})

let images=["https://a.travel-assets.com/findyours-php/viewfinder/images/res70/120000/120454-Eastbourne.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium",
            "https://mediaim.expedia.com/destination/1/a05ff37e4da759689430321248e304e8.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium",
            "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/75000/75448-Mahabaleshwar-And-Vicinity.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium",
            "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/97000/97609-Dehradun-And-Vicinity.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium",
            "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/88000/88565-Danbury-And-Vicinity.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium",
            "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/75000/75441-Manali-And-Vicinity.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium",
            "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/40000/40937-Istanbul.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium",
            "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/72000/72395-Shimla-And-Vicinity.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium"]

            let imageshow=document.getElementById('image8');
            let prev=document.getElementById('prev');
            let next=document.getElementById('next');
            let currImage=0;
            imageshow.setAttribute('src',images[currImage],images[currImage+1])
           
           

            prev.addEventListener('click',function(e){
                e.preventDefault();
                currImage--
                if(currImage<0){
                        currImage=images.length-1
                }
                imageshow.setAttribute('src',images[currImage])
            })
            next.addEventListener('click',function(e){
                e.preventDefault();
                currImage++
                if(currImage>=images.length){
                    currImage=0
                }
                imageshow.setAttribute('src',images[currImage])
            })

let tag1=document.getElementById('cd')
let tag2=document.getElementById('ef')
let tag3=document.getElementById('gh')
let tag4=document.getElementById('kl')
let tag5=document.getElementById('mn')

tag1.addEventListener('click',function(){
    alert("This page is currently not available")
})
tag2.addEventListener('click',function(){
    alert("This page is currently not available")
})
tag3.addEventListener('click',function(){
    alert("This page is currently not available")
})
tag4.addEventListener('click',function(){
    alert("This page is currently not available")
})
tag5.addEventListener('click',function(){
    alert("This page is currently not available")
})

let changelang=document.getElementById('language')

changelang.addEventListener('click',function()
{
    alert("this page currently not available")
})
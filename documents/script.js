let l=document.querySelector(".leftcontaner")
let r=document.querySelector(".rightcontaner")

var x = window.matchMedia("(max-width: 412px)")



// console.log(x)
let chatbox=document.querySelectorAll(".chatbox");
chatbox.addEventListener('click',()=>{
    if(x.matches == true)
    {
        l.style.display="none"
        r.style.display="block"
    }
    else
    {
        console.log("hello")
    }

})


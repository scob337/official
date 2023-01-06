let Head = document.getElementById("home");
let List = document.querySelector("header ul");
let burger =document.getElementById('head-bar'); 
let Boody = document.getElementsByTagName("body");


burger.onclick = () => {
    List.classList.toggle("hide");


}
    if (Head.innerWidth >= 830 ) {
    List.classList.remove("hide");

        
    }
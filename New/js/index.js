let Nav = document.querySelectorAll('.nav-links a');
let Header = document.querySelector('.nav-links');
// Active Tabs in NavBar
Nav.forEach ( ele =>    {
    ele.onclick = () => {
        Nav.forEach (ele =>{
            ele.classList.remove('active')
        })
        ele.classList.add('active')
    };
});


let toggle = document.getElementById('toggel-nav') , 
toggle_nav = document.getElementById('nav-bar') ;




toggle.onclick =  () =>{
    toggle_nav.classList.toggle('hide')
};



//Clock 
(function clock (){

    let Timer = new Date ();
let Hours = Timer.getHours();
let Min = Timer.getMinutes();
let Sec = Timer.getSeconds();
let Clock = document.getElementById('Clock');
if(Hours < 10 ){

    Hours = "0" + Hours;
}
if(Min < 10){
    Min = "0" + Min;
}
if(Sec < 10){
    Sec= "0" + Sec;
}
Clock.innerHTML = ` ${Hours} : ${Min} : ${Sec}`
setInterval (clock, 1000)
})();

let ScrollBtn= document.getElementById('scrollbtn');


document.body.onscroll= function(){
    if(scrollY >= 200){
        ScrollBtn.style.display="flex";
    }
    else{
        ScrollBtn.style.display="none";


    }
}
ScrollBtn.onclick = () =>{
    scrollTo(0,0)
}



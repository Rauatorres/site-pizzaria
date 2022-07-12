const navbar = document.getElementById('navbar')
const navbarInitialPosition = navbar.offsetTop

window.onscroll = function(){
    if(window.scrollY >= navbarInitialPosition){
        navbar.classList.add('top-nav')
    }else{ 
        navbar.classList.remove('top-nav')
    }
}
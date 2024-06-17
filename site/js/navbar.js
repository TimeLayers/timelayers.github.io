var navbar = document.querySelector('.navbar');
var logo = document.querySelector('.logo');

window.addEventListener('scroll', function(){
    if(window.scrollY > 50)
    {
        navbar.classList.add('shrink');
        logo.classList.add('shrink');
    }
    else
    {
        navbar.classList.remove('shrink');
        logo.classList.remove('shrink');
    }
});

navbar.addEventListener('mouseenter', function(){
    navbar.classList.remove('shrink');
    logo.classList.remove('shrink');
});

navbar.addEventListener('mouseleave', function(){
    if(window.scrollY > 50){
        navbar.classList.add('shrink');
        logo.classList.add('shrink');
    }
    
});
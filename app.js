let search = document.querySelector('.search-box');
let search_icon = document.querySelector('#search-icon');

search_icon.addEventListener('click',function(){
    search.classList.toggle('active');
})
let navbar = document.querySelector('.navbar');
let navlist = document.querySelectorAll('.navbar a')
let menu_icon = document.querySelector('#menu-icon');

menu_icon.addEventListener('click',function(){
    navbar.classList.toggle('active');
})

navlist.forEach(function(e){
    e.addEventListener('click',function(){
        navbar.classList.remove('active');
    })
})
let header = document.querySelector('header');


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 20);

});


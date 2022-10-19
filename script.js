const menuBtn=document.querySelector('#btn');
const closeBtn=document.querySelector(".pop-up-close-btn");
const poUpMenu=document.querySelector(".mobile-menu-list");
poUpMenu.classList.add('disappear');
const menuIcon=document.querySelector('.menu-btn');
const headerSection=document.querySelector('#head-container');
const mainBody=document.querySelector('#header-body');
const mobileMenuList1=document.querySelector('.for-clik-1');
const mobileMenuList2=document.querySelector('.for-clik-2');
const mobileMenuList3=document.querySelector('.for-clik-3');

const openMenu = () =>{
    poUpMenu.classList.remove('disappear');
    menuIcon.classList.add('disappear');
    headerSection.classList.add('blur');
    mainBody.classList.add('blur');
};

const closeMenu = () =>{
    poUpMenu.classList.add('disappear');
    menuIcon.classList.remove('disappear');
    headerSection.classList.remove('blur');
    mainBody.classList.remove('blur');
};

menuBtn.addEventListener('click',openMenu);
closeBtn.addEventListener('click',closeMenu);
mobileMenuList1.addEventListener('click',closeMenu);
mobileMenuList2.addEventListener('click',closeMenu);
mobileMenuList3.addEventListener('click',closeMenu);
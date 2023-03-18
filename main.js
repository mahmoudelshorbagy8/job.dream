// navbar
let btnMob = document.querySelector('#btn-mobil');
let navBar = document.querySelector('.navbar');
// navbar
btnMob.onclick=()=>{
 btnMob.classList.toggle('fa-times');
 navBar.classList.toggle('show');
// remove class and icon...
 searchBox.classList.remove('show');
 btnSearch.classList.remove('fa-times');

}
// search box
let btnSearch = document.querySelector('#btn-search');
let searchBox = document.querySelector('.search-form');
btnSearch.onclick=()=>{
 btnSearch.classList.toggle('fa-times')
 searchBox.classList.toggle('show');
 // remove class and icon...
 navBar.classList.remove('show');
 btnMob.classList.remove('fa-times');

}
// form sing up
let btnUser = document.querySelector('#btn-user');
let suingUp = document.querySelector('.login');
btnUser.onclick=()=>{
 suingUp.classList.toggle('show');
  // remove class and icon...
  navBar.classList.remove('show');
  btnMob.classList.remove('fa-times');
  searchBox.classList.remove('show');
 btnSearch.classList.remove('fa-times');
}
// remove icone close
document.querySelector('#close').onclick =()=>{
 document.querySelector('.login').classList.remove('show');
};
//  window
window.onscroll = ()=>{
  searchBox.classList.remove('show');
  navBar.classList.remove('show');
  suingUp.classList.remove('show');
  btnMob.classList.remove('fa-times');
  btnSearch.classList.remove('fa-times');
  if(window.scrollY > 60){
    document.querySelector('#scroll-up').classList.add('show');
  } else{
    document.querySelector('#scroll-up').classList.remove('show');
  }
}
















// filter 
let boxFilter = document.querySelectorAll('.box-filter .btnfilter');
let items = document.querySelectorAll('.filter-job .row .flex');
boxFilter.forEach(btnfilter =>{
btnfilter.onclick=()=>{
 // will remove hide by click
 boxFilter.forEach(btn=>btn.classList.remove('hide')); 
 btnfilter.classList.add('moveup');
 let dateFilter = btnfilter.getAttribute('data-fliter');
 items.forEach(itemesFilter =>{
  // start with data iteam by attribute
  itemesFilter.classList.remove('moveup');
  itemesFilter.classList.add('hide');
  if(itemesFilter.getAttribute('data-iteam') == dateFilter|| dateFilter =='jobs'){
   itemesFilter.classList.remove('hide');
   itemesFilter.classList.add('moveup');
  }
 });
}
});
// 

AOS.init();


// job-search

let dropDown = document.querySelectorAll('.job-search form .dropbox .dropdow .lists .items');

dropDown.forEach(items =>{
  items.onclick =()=>{
    iteamParent = items.parentElement.parentElement;
    let outPut = iteamParent.querySelector('.output');
    outPut.value = items.innerText;
  }
});



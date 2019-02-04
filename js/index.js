// Your code goes here

// NAVIGATION
let logo = document.querySelector('.logo-heading')
let navItems = document.querySelectorAll('.nav-link');

const navigation = {
  home: navItems[0],
  aboutUs: navItems[1],
  blog: navItems[2],
  contact: navItems[3],
}

let isLogoClicked = false;

// click
logo.addEventListener('click', (event) => {
  logo.style.color = isLogoClicked ? 'initial' : 'orange';
  isLogoClicked = !isLogoClicked;
});

// mouseover / mouseout
navItems.forEach((item) => {
  item.addEventListener('mouseover', (event) => {
    item.style.fontSize = '26px';
  });

  item.addEventListener('mouseout', (event) => {
    item.style.fontSize = 'initial';
  });
})





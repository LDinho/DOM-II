// Your code goes here

// NAVIGATION
let logo = document.querySelector('.logo-heading');
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

// MID SECTION
let topMidSection = document.querySelector('section');

/*
It appears that it's not recommended to use focus on a plain <div> element
but rather on a more appropriate/semantic element
such as a button, form, input field, etc...
See info here: https://stackoverflow.com/questions/18504139/div-onblur-function.

Here I'm just experimenting to focus on a whole section -- had to use
the tabindex attribute.
 */

topMidSection.setAttribute('tabindex', '0');
topMidSection.classList.add('top-section');

let topSection = document.querySelector('.top-section');

topSection.addEventListener('focus', () => {
  topSection.style.backgroundColor = 'lightblue';
}, true);

topSection.addEventListener('blur', () => {
  topSection.style.backgroundColor = 'initial';
}, true);

let bottomMidSection = document.querySelector('.inverse-content');
bottomMidSection.setAttribute('tabindex', '0');

bottomMidSection.addEventListener('focus', () => {
  bottomMidSection.style.backgroundColor = 'lightblue';
}, true);

bottomMidSection.addEventListener('blur', () => {
  bottomMidSection.style.backgroundColor = 'initial';
}, true);

// Resize Event on window - remove top image at 500px
let mainImage = document.querySelector('img');
mainImage.classList.add('main-image');

window.addEventListener('resize', () => {
  window.innerWidth < 500 ? mainImage.style.display = 'none' : mainImage.style.display = 'initial';
})

// Scroll
let destinationSection = document.querySelector('.content-destination');
destinationSection.style.height = '200px';
destinationSection.style.overflow = 'scroll';

destinationSection.addEventListener('scroll', () => {
  destinationSection.style.backgroundColor = 'lightgreen';
});

// Drag and Dragover
/*
Drag fun bus image over bottomMidSection where it says "Adventure Awaits,
and 2 events occurs.
1st event: "Let's go" section turns red.
2nd event: "Adventure Awaits" section gets a red border.
 */

mainImage.addEventListener('drag', () => {
  topSection.style.backgroundColor = 'red';
});

bottomMidSection.addEventListener('dragover', () => {
  bottomMidSection.style.border = '3px dashed red';
});

// Keyup
/*
Created an input field in footer to show keyup event. Go to input field and press "enter".
 */
const createEle = tag => document.createElement(tag);
const selectOne = tag => document.querySelector(tag);

const footer = selectOne('footer');
console.log(footer);

const createElementAndAppend = ({tag, attribute, content, targetElement, styles}) => {
  const newElement = createEle(tag);
  newElement.setAttribute(attribute.type, attribute.value);
  newElement.textContent = content;
  Object.keys(styles).forEach((propName) => {
    newElement.style[propName] = styles[propName];
  });
  targetElement.prepend(newElement);
}

createElementAndAppend({
  tag: 'input',
  attribute: {
    type: 'text',
  },
  styles: {
    color: 'green',
    width: '500px',
    fontSize: '20px',
    height: '56px',
    margin: '0 auto',
    display: 'block',
  },
  targetElement: footer,
});

const input = selectOne('input');

input.addEventListener('keyup', (e) => {
  console.log(e);
  console.log(e.target.value);
  if (e.key === 'Enter') {
    alert('Enter Pressed');
  }
});


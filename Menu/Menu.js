/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
const menuPannel = document.querySelector('.header');

menuPannel.appendChild(createMenu(menuItems));

function createMenu(menuArray) {
  const menu = document.createElement('div');
  const ul = document.createElement('ul');

  // for each menu item, create an <li> whose text content is the item and add into <ul>
  menuArray.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item
    ul.appendChild(li);
  });

  menu.appendChild(ul);
  menu.classList.add('menu');

  const menuBtn = document.querySelector('.menu-button');

  // add event listener to menu item
  menuBtn.addEventListener('click', event => {
    menu.classList.toggle('menu--open');

  })

  // Add event listener
  window.addEventListener('click', event => {
    // console.log(menu.classList.contains('menu--open'))
    // console.log(event.target.classList.contains('menu-button'))
    if (!event.target.classList.contains('menu-button')) {
      if (menu.classList.contains('menu--open')) {
        menu.classList.remove('menu--open')
      }
    }
  })

  return menu;
}
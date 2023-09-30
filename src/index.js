import { components } from './pageLoad';
import { homeMessage } from './home';
import { menuComp } from './menu';
import { contactComp } from './contact';

// Create the backbone component of the restaurant page.
components();

const homeTab = document.querySelector('button.home');
const menuTab = document.querySelector('button.menu');
const contactTab = document.querySelector('button.contact');
const pgCtnr = document.querySelector('#page');

console.log(homeTab);

// display a summary message as default
homeMessage();


homeTab.addEventListener('click', () => switchTabto(homeMessage));
menuTab.addEventListener('click', () => switchTabto(menuComp));
contactTab.addEventListener('click', () => switchTabto(contactComp));

function switchActive(node) {
   const status = node.getAttribute('data-isActive');
   if (status === 'true') {
    node.setAttribute('data-isActive', 'false');
   } else {
    node.setAttribute('data-isActive', 'true');
   }
}

function switchTabto(tabFun) {
    const childTab = document.querySelector('[data-isActive = true]');
    switchActive(childTab);
    pgCtnr.removeChild(childTab);
    console.log(tabFun.name);
    tabFun();
}













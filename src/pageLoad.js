import './home.css';

function components() {
    const content = document.querySelector('#content');
    const headline = document.createElement('div');
    const navBar = document.createElement('div');
    const container = document.createElement('div');
    const pageContainer = document.createElement('div');
    const homeTab = document.createElement('button');
    const menuTab = document.createElement('button');
    const contactTab = document.createElement('button');

    homeTab.textContent = 'Home';
    homeTab.classList.add('home');
    menuTab.textContent = 'Menu';
    menuTab.classList.add('menu');
    contactTab.textContent = 'Contact';
    contactTab.classList.add('contact');


    headline.textContent = 'SH SteakHouse';
    headline.setAttribute('id', 'headline');

    navBar.setAttribute('id', 'nav');
    navBar.appendChild(homeTab);
    navBar.appendChild(menuTab);
    navBar.appendChild(contactTab);

    container.setAttribute('id', 'container');
    container.appendChild(pageContainer)

    pageContainer.setAttribute('id', 'page');

    content.appendChild(headline);
    content.appendChild(navBar);
    content.appendChild(container);


}

export {components};
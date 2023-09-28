import './home.css';

function components() {
    const headline = document.createElement('div');
    const navBar = document.createElement('div');
    const ad = document.createElement('div');
    const pageContainer = document.createElement('div');


    headline.textContent = 'SH SteakHouse';
    headline.setAttribute('id', 'headline');
    navBar.setAttribute('id', 'nav');
    ad.setAttribute('id', 'ad');
    ad.textContent ='Savor the best in steak at our premier restaurant. We pride ourselves on expertly grilled, hand-selected cuts of beef, from tender filet mignon to flavorful ribeyes. Our inviting ambiance, exceptional service, and fine wine selection ensure a memorable dining experience. Join us for a culinary journey celebrating the art of steak. Reserve your table now.'
    pageContainer.setAttribute('id', 'page');
    pageContainer.appendChild(ad);

    return {headline, pageContainer};


}

export {components};
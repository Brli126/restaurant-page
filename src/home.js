import './home.css';

function homeMessage() {
    const pgCtnr = document.querySelector('#page');
    const ad = document.createElement('div');

    ad.classList.add('home');
    ad.setAttribute('id', 'ad');
    ad.setAttribute('data-isActive', 'true');
    ad.textContent ='Savor the best in steak at our premier restaurant. We pride ourselves on expertly grilled, hand-selected cuts of beef, from tender filet mignon to flavorful ribeyes. Our inviting ambiance, exceptional service, and fine wine selection ensure a memorable dining experience. Join us for a culinary journey celebrating the art of steak. Reserve your table now.';

    pgCtnr.appendChild(ad);
}

export { homeMessage };
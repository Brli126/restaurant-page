import './home.css';
import phoneIcon from './phone-classic.svg';
import emailIcon from './email-outline.svg';
import addressIcon from './address.svg';

function contactComp() {
    const pgCtnr = document.querySelector('#page');
    const contact = document.createElement('div');

    contact.setAttribute('id', 'contact');
    contact.setAttribute('data-isActive', 'true');

    const phoneNumCtnr = document.createElement('div');
    const emailCtnr = document.createElement('div');
    const addressCtnr = document.createElement('div');
    const ctnrList = [phoneNumCtnr, emailCtnr, addressCtnr];

    for (let i=0; i < 3; i++) {
        ctnrList[i].classList.add('infoContainer');
    }

    const phoneNum = document.createElement('p');
    const email = document.createElement('p');
    const address = document.createElement('p');

    phoneNum.textContent = '420-420-6969';
    email.textContent = 'abc@mymail.com';
    address.textContent = '123 Null St, Nomansland';

    const Icon1 = new Image();
    const Icon2 = new Image();
    const Icon3 = new Image();
    const IconList = [Icon1, Icon2, Icon3];

    for (let i = 0; i < 3; i++) {
        IconList[i].classList.add('menuIcon');
    }

    Icon1.src = phoneIcon;
    Icon2.src = emailIcon;
    Icon3.src = addressIcon;

    phoneNumCtnr.appendChild(Icon1);
    phoneNumCtnr.appendChild(phoneNum);
    
    emailCtnr.appendChild(Icon2);
    emailCtnr.appendChild(email);

    addressCtnr.appendChild(Icon3);
    addressCtnr.appendChild(address);

    for (let i=0; i < 3; i++) {
        contact.appendChild(ctnrList[i]);
    }


    pgCtnr.appendChild(contact);


  
}

export {contactComp};
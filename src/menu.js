import './home.css';
import steakImg from './ribeye_steak.jpg';
import lbChopImg from './lamb_chop.jpg';
import pastaImg from './shrimp_pasta.jpg';
import scallopImg from './scallop.jpg';


function menuComp() {
    const pgCtnr = document.querySelector('#page');
    const menu = document.createElement('div');

    const img1 = new Image();
    const img2 = new Image();
    const img3 = new Image();
    const img4 = new Image();
    img1.src = steakImg;
    img2.src = lbChopImg;
    img3.src = pastaImg;
    img4.src = scallopImg;

    const imgList = [img1, img2, img3, img4];
    
    menu.setAttribute('id', 'menu');
    menu.setAttribute('data-isActive', 'true');

    for (let i = 0; i < 4; i++) {
        imgList[i].classList.add('menu');
        menu.appendChild(imgList[i]);
    }

    pgCtnr.appendChild(menu);

}

export { menuComp };
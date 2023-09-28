import { components } from './pageLoad';


const content = document.querySelector('#content');
console.log(document);
const cp = components();
content.appendChild(cp.headline);
content.appendChild(cp.pageContainer)



console.log('siema');
const name = 'XXX';
const age = 31;
let isTrue = true;
isTrue = false;
isTrue = 'Tak';
console.log(name);
console.log(isTrue);
console.log(`Mam na imie ${name} i mówie ${isTrue}`);

const heading = document.querySelector('.mainHeader');
console.log(heading);

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
console.log(paragraphs[0]);

const about = document.querySelector('.about__paragraph--js');
console.log(about.innerHTML);
about.innerHTML = `<strong>Nazywam</strong> sie ${name} i mam ${age} lat`;

const wel = document.querySelector('.welcome');
console.log(wel.innerHTML);
wel.innerHTML = `Witaj ${name} na mojej stronie!`

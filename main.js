console.log('siema');
const name = 'XXX';
const surname = 'BBB'
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

const wel = document.querySelector('.welcome__paragraph--js');
console.log(wel.innerHTML);
wel.innerHTML = `Witaj ${name} na mojej stronie!`


function calculate(x){
  x = x + 3;
  console.log(x);
  return x*7;
}

console.log(calculate(2));

const calculateFat = (x) =>{
  x = x + 1;
  console.log(x);
  return x+5;
}

console.log(calculateFat(1));
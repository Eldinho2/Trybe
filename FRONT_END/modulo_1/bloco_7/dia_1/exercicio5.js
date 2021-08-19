let botao = document.querySelector('button');
let p = document.querySelector('p');

let clickCount = 0;

botao.addEventListener('click', () => {
  clickCount += 1;
	p.innerHTML = clickCount;
})
var x = window.document.getElementsByTagName('h1')[0];
var y = window.document.getElementsByName('paragrafo')[0];
var z = window.document.getElementById('div1');

x.style.color = 'green';
y.style.backgroundColor = 'violet';

window.alert(y.innerText);

window.document.write('Escrevendo no HTML pelo JS');

x.innerHTML += ' com a escola DNC';
x.style.textAlign = 'center';



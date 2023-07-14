const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');
const h3 = document.getElementById('h3');
const checkbox = document.getElementById('checkbox');
var count = 0;

function checked() {
  if (count == 0) {
    h1.textContent = '19.99';
    h2.textContent = '24.99';
    h3.textContent = '39.99';
    count = 1;
  } else {
    h1.textContent = '199.99';
    h2.textContent = '249.99';
    h3.textContent = '399.99';
    count = 0;
  }
  
}
checkbox.addEventListener('click',checked);

const list = document.querySelectorAll('.list');
list.forEach((list) =>
list.addEventListener('click', activeLink)); 

function activeLink(){
list.forEach((list) =>
list.classList.remove('active'));
this.classList.add('active')
}

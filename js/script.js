// =====Função para a barra do nav bar ficar fixa e ser ativada ao evento de scroll=====
function scrollHeader() {
  const nav = document.getElementById("header");

  //Se o scrollY for > que 50, adiciona a classe de rolagem, caso não seja, remove
  if (this.scrollY >= 50) nav.classList.add("active-header");
  else nav.classList.remove("active-header");
}

//o scroll é o evento e o scrollHeader é a função do evento
window.addEventListener("scroll", scrollHeader);

// =====Função para os itens do dropdown aparecerem e sumirem=====

// Possivel solução, vai ter uma função de onclick, no menu-item, e assim que ativada(clicada)
// ela vai ativar o .active-dropdown-menu, fazendo com que o item apareça

const dropdownMenu1 = document.getElementById("dropdown-item-1");
const dropdownMenu2 = document.getElementById("dropdown-item-2");
const dropdownMenu3 = document.getElementById("dropdown-item-3");

const menuItem1 = document.getElementById("menu-item-1");
const menuItem2 = document.getElementById("menu-item-2");
const menuItem3 = document.getElementById("menu-item-3");

function ShowDropdown1(event) {
  event.preventDefault();
  dropdownMenu1.classList.toggle("active-dropdown-menu");
  dropdownMenu2.classList.remove("active-dropdown-menu");
  dropdownMenu3.classList.remove("active-dropdown-menu");
}

function ShowDropdown2(event) {
  event.preventDefault();
  dropdownMenu1.classList.remove("active-dropdown-menu");
  dropdownMenu2.classList.toggle("active-dropdown-menu");
  dropdownMenu3.classList.remove("active-dropdown-menu");
}

function ShowDropdown3(event) {
  event.preventDefault();
  dropdownMenu1.classList.remove("active-dropdown-menu");
  dropdownMenu2.classList.remove("active-dropdown-menu");
  dropdownMenu3.classList.toggle("active-dropdown-menu");
}

function RemoveDropdown() {
  dropdownMenu1.classList.remove("active-dropdown-menu");
  dropdownMenu2.classList.remove("active-dropdown-menu");
  dropdownMenu3.classList.remove("active-dropdown-menu");
}

menuItem1.addEventListener("click", ShowDropdown1);
menuItem2.addEventListener("click", ShowDropdown2);
menuItem3.addEventListener("click", ShowDropdown3);

dropdownMenu1.addEventListener("mouseleave", RemoveDropdown);
dropdownMenu2.addEventListener("mouseleave", RemoveDropdown);
dropdownMenu3.addEventListener("mouseleave", RemoveDropdown);


// =====Função para ativar o menu mobile quando chegar no tamanho de tela e dar vida ao botão hamburguer

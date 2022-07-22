function scrollHeader() {
  const nav = document.getElementById("header");

  //Se o scrollY for > que 50, adiciona a classe de rolagem, caso não seja, remove
  if (this.scrollY >= 50) nav.classList.add("active-header");
  else nav.classList.remove("active-header");
}

//o scroll é o evento e o scrollHeader é a função do evento
window.addEventListener("scroll", scrollHeader);

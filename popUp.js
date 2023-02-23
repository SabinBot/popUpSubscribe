function manipulareSubscribe() {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  const titlu = document.createElement("h2");
  titlu.textContent = "Congratulations for your subscription!";
  container.appendChild(titlu);
}

function manipulareNoThanks() {
  const container = document.querySelector(".container");
  container.style.display = "none";
}

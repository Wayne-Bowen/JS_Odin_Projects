const container = document.querySelector("#container");
const redpara = document.createElement("p");
redpara.textContent = "Hey I'm Red";
redpara.style.color = "red";
container.appendChild(redpara);

const blueh3 = document.createElement("h3");
blueh3.textContent = "I'm a blue h3";
blueh3.style.color = "blue";
container.appendChild(blueh3);

const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

const para = document.createElement("p");
para.textContent = "ME TOO";

div.appendChild(h1);
div.appendChild(para);

container.appendChild(div);

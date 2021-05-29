showCart = () => {
  document.getElementById("cart").style.display = "block";
};

closeCart = () => {
  document.getElementById("cart").style.display = "none";
};

let itensN = [];
let itensP = [];

addCart = (name, valor) => {
  sessionStorage.setItem("name", name);
  sessionStorage.setItem("preco", valor);
  itensN.push(sessionStorage.getItem("name"));
  itensP.push(sessionStorage.getItem("preco"));

  document.getElementById("cartItensName").innerHTML = `${itensN
    .map((pos) => {
      return `
      <p id="${itensN.indexOf(pos)}">${pos}</p>`})
    .join("")}`;
    
  document.getElementById("cartItensPrice").innerHTML = `${itensP
    .map((pos) => {
      return `
   <p id="${itensP.indexOf(pos)}">${Number(pos).toFixed(2).replace(".",",")}
    <span id="remove" onclick="removeItem(${itensP.indexOf(pos)})">X</span></p>`;
    })
    .join("")}`;
};

qtdCart = () => {
  document.getElementById("buttonCart").innerHTML = `
    <span id="qtdCart">${itensP.length}</span>
  `
}
removeItem = (posicao) => {
  let removeName = document.getElementById(posicao);
  removeName.remove();

  let removePrice = document.getElementById(posicao);
  removePrice.remove();

  itensN.splice(posicao, 1);
  itensP.splice(posicao, 1);
  qtdCart();
};

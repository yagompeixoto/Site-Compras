fetch("./JS/api.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    addProd(data);
  });

  popup = () => {
    var popup = document.getElementById("popup2");
    popup.classList.toggle("hide");
    setTimeout(() =>{popup.classList.toggle("hide")},3000)
    var popupText = document.getElementById("popupAdd");
    popupText.classList.toggle("show");
    setTimeout(() =>{popupText.classList.toggle("show")},3000)
  }

 addProd = (data) => {
  document.getElementById("produts").innerHTML = `${data
    .map((prod) => {
      return `
            <div  id="${
              prod.id
            }" style="justify-content:space-between; flex-direction:column; display:flex">
                <img src="${prod.image}"></img>
                <p>${prod.nome}</p>
                <p2>R$ ${prod.preco.toFixed(2).replace(".", ",")}</p2>
                <button id="addCart" onclick="addCart('${prod.nome}',${prod.preco}), popup(), qtdCart()"><h3>+Carrinho</h3>
                </button>
            </div>
      `;
    })
    .join("")}`;
}

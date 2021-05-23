fetch("./JS/api.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    addProd(data);
  });

function addProd(data) {
  document.getElementById("produts").innerHTML = `${data
    .map((prod) => {
      return `
            <div  id="${
              prod.id
            }" style="justify-content:space-between; flex-direction:column; display:flex">
                <img src="${prod.image}"></img>
                <p>${prod.nome}</p>
                <p2>R$ ${prod.preco.toFixed(2).replace(".", ",")}</p2>
                <button id='addCart' onclick="addCart('${prod.nome}',${prod.preco})"><h3>+Carrinho</h3></button>
            </div>
      `;
    })
    .join("")}`;
}

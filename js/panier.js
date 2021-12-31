let btns_suppr = document.getElementsByClassName("btn-supprimer");

function displayPanier() {
    let cartItems = localStorage.getItem("ProduitDansPanier");
    cartItems = JSON.parse(cartItems);
    let ItemProduit = document.querySelector(".Panier");
    console.log(cartItems);
    if (cartItems && ItemProduit) {
        Object.values(cartItems).map(item => {
            ItemProduit.innerHTML += `<tr>
            <td> ${item.modele} </td>
            <td> ${item.couleur}</td>
            <td> ${item.stockage}</td>
            <td> ${item.dansPanier}</td>
            <td> ${item.assurance} </td>
            <td> <img src="../images/cross_icon.png" class="btn-supprimer" alt="Logo du supprimer" /> </td>
            </tr>`;
        });
    }
}

var suppr = (i) => {
    btns_suppr.item(i).parentNode.parentNode.parentNode.remove(); //un tbody sorti de nul part
    let cartItems = localStorage.getItem("ProduitDansPanier");
    cartItems = JSON.parse(cartItems);
    delete cartItems[i];
    console.log(i);
    console.log(cartItems);
    localStorage.setItem("ProduitDansPanier", JSON.stringify(cartItems));
};

displayPanier();

for (let i = 0; i < btns_suppr.length; i++) {
    btns_suppr.item(i).addEventListener('click', suppr.bind(event, i),false);
}
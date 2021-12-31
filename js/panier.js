let btns_suppr = document.getElementsByClassName("btn-supprimer");

function displayPanier() {
    let cartItems = localStorage.getItem("ProduitDansPanier");
    cartItems = JSON.parse(cartItems);
    let ItemProduit = document.querySelector(".Panier");
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
function suppr(i){
    let cartItems = localStorage.getItem("ProduitDansPanier");
    let nb = localStorage.getItem('nbElements');
    cartItems = JSON.parse(cartItems);
    nb = JSON.parse(nb);
    nb -= cartItems[i].dansPanier;

    delete cartItems[i];
    console.log(i);
    console.log(cartItems);
    localStorage.setItem("ProduitDansPanier", JSON.stringify(cartItems));
    localStorage.setItem("nbElements", JSON.stringify(nb));
}

displayPanier();

for (let i = 0; i < btns_suppr.length; i++) {
    btns_suppr.item(i).addEventListener('click', ()=>{
        btns_suppr.item(i).parentNode.parentNode.parentNode.remove(); //un tbody sorti de nul part
        let cartItems = localStorage.getItem("ProduitDansPanier");
        cartItems = JSON.parse(cartItems);

        let dicoclef = Object.keys(cartItems);
        i = dicoclef[i];

        let nb = localStorage.getItem('nbElements');
        nb = parseInt(nb);
        localStorage.setItem('nbElements', nb - cartItems[i].dansPanier);
        document.querySelector('#nbPanier').textContent = `(${nb - cartItems[i].dansPanier})`;

        delete cartItems[i];
        console.log(i);
        console.log(cartItems);
        localStorage.setItem("ProduitDansPanier", JSON.stringify(cartItems));

    });
}
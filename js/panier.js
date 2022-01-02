let btns_suppr = document.getElementsByClassName("btn-supprimer");
let prixTotal = 0;
function displayPanier() {
    let cartItems = localStorage.getItem("ProduitDansPanier");
    cartItems = JSON.parse(cartItems);
    let ItemProduit = document.querySelector(".Panier");
    if (cartItems && ItemProduit) {
        Object.values(cartItems).map(item => {
            prixTotal += parseFloat(item.prix)*parseInt(item.dansPanier);
            ItemProduit.innerHTML += `<tr>
            <td> ${item.modele}</td>
            <td> ${item.couleur}</td>
            <td> ${item.stockage}</td>
            <td> ${item.dansPanier}</td>
            <td> ${item.assurance}</td>
            <td> ${item.prix}/u</td>
            <td> <img src="../images/cross_icon.png" class="btn-supprimer" alt="Logo du supprimer" /> </td>
            </tr>`;
        });
        document.querySelector('#totale').textContent = `Prix total : ${prixTotal}€`;
    }
}

displayPanier();

let cartItems = localStorage.getItem("ProduitDansPanier");
cartItems = JSON.parse(cartItems);
let dicoclef = Object.keys(cartItems); //récupère les clefs du dictionnaire du panier

for (let i = 0; i < btns_suppr.length; i++) {
    btns_suppr.item(i).addEventListener('click', ()=>{
        btns_suppr.item(i).parentNode.parentNode.parentNode.remove(); //un tbody sorti de nul part
        let cartItems = localStorage.getItem("ProduitDansPanier");
        cartItems = JSON.parse(cartItems);
        const j = dicoclef[i];
        console.log(i);
        console.log(j);
        let nb = localStorage.getItem('nbElements');
        nb = parseInt(nb);
        localStorage.setItem('nbElements', nb - cartItems[j].dansPanier);
        document.querySelector('#nbPanier').textContent = `(${nb - cartItems[j].dansPanier})`;

        delete cartItems[j];
        console.log(cartItems);
        localStorage.setItem("ProduitDansPanier", JSON.stringify(cartItems));

    });
}
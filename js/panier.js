function onLoadCartNumbers(){
    let nb = localStorage.getItem('nbElements');

    if(nb){
        document.querySelector('#nbPanier').textContent = nb;
    }
}

function displayPanier(){
    let cartItems = localStorage.getItem("ProduitDansPanier");
    cartItems = JSON.parse(cartItems);
    let ItemProduit = document.querySelector(".Panier");
    console.log(cartItems);
    if(cartItems && ItemProduit) {
        Object.values(cartItems).map(item => {
            ItemProduit.innerHTML +='<tr><td>${item.modele}</td>';
        });
    }
}

onLoadCartNumbers();
displayPanier();
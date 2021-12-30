let cart = document.querySelector('#btn-ajout');
let produit = {
    modele: document.getElementById('modele-select').value,
    couleur: document.getElementById('couleur-select').value,
    stockage: document.getElementById('stockage-select').value,
    assurance: document.querySelector('#assuranceFW').checked,
    dansPanier: 0
};

cart.addEventListener('click', () => {
    produit.modele = document.getElementById('modele-select').value;
    produit.couleur = document.getElementById('couleur-select').value;
    produit.stockage = document.getElementById('stockage-select').value;
    produit.assurance = document.querySelector('#assuranceFW').checked;
    nbElementPanier(produit);
    CoutTotal(produit);
})

function nbElementPanier(produit) {
    let nb = localStorage.getItem('nbElements');
    nb = parseInt(nb);
    if (nb) {
        localStorage.setItem('nbElements', nb + 1);
        document.querySelector('#nbPanier').textContent = `(${nb+1})`;
    } else {
        localStorage.setItem('nbElements', 1);
        document.querySelector('#nbPanier').textContent = `(${1})`;
    }
    setItems(produit);
}

function setItems(produit) {
    let cartItems = localStorage.getItem('ProduitDansPanier');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[produit.modele + produit.couleur + produit.stockage] === undefined) {
            cartItems = {
                ...cartItems,
                [produit.modele + produit.couleur + produit.stockage]: produit
            }
            produit.dansPanier = 1;
        } else {
            cartItems[produit.modele + produit.couleur + produit.stockage].dansPanier += 1;
        }
    } else {
        produit.dansPanier = 1;
        cartItems = {
            [produit.modele + produit.couleur + produit.stockage]: produit
        }
    }
    localStorage.setItem("ProduitDansPanier", JSON.stringify(cartItems));
}

//On doit ajouter les prix de chaque modèle afin de pouvoir afficher un panier complet
function CoutTotal(produit) {
    console.log("Le prix du produit est : ", produit);
}
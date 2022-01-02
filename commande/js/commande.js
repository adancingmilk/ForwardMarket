let cart = document.querySelector('#btn-ajout');
let selects = document.getElementsByClassName("selecteur");
let choixmodele = document.getElementById('modele-select');
let choixstock = document.getElementById('stockage-select');
let len = localStorage.getItem('ProduitDansPanier');
len = JSON.parse(len);
let index = len === null ? 0 : Object.keys(len).length;


let produit = {
    modele: document.getElementById('modele-select').value,
    couleur: document.getElementById('couleur-select').value,
    stockage: document.getElementById('stockage-select').value,
    assurance: document.querySelector('#assuranceFW').checked,
    prix : document.getElementById('prixchange'),
    dansPanier: 0
};

cart.addEventListener('click', () => {
    produit.modele = document.getElementById('modele-select').value;
    produit.couleur = document.getElementById('couleur-select').value;
    produit.stockage = document.getElementById('stockage-select').value;
    produit.assurance = document.querySelector('#assuranceFW').checked;
    if (produit.assurance){
        produit.assurance = "Oui";
        produit.prix = document.getElementById('prixchange').innerHTML + 109.99;
    }
    else {
        produit.assurance = "Non";
        produit.prix = document.getElementById('prixchange').innerHTML;
    }

    nbElementPanier(produit);
    CoutTotal(produit);
})

for (let i = 0; i < selects.length; i++) {
    selects.item(i).addEventListener('change', () => {

        let prixModele = 809;
        switch (document.getElementById('modele-select').value) {
            case 'iPhone 13 Mini':
                break;
            case 'iPhone 13':
                prixModele = prixModele + 100;
                break;
            case 'iPhone 13 Pro':
                prixModele = prixModele + 350;
                break;
            case 'iPhone 13 Pro Max':
                prixModele = prixModele + 450;
                break;
        }

        let prixStockage = 0;
        switch (document.getElementById('stockage-select').value) {
            case '256Go':
                prixStockage = 100;
                break;
            case '512Go':
                prixStockage = 200;
                break;
            case '1To':
                prixStockage = 300;
                break;
        }

        let prix = prixModele + prixStockage;
        document.querySelector('#prixchange').textContent = `${prix}€`;
    })
}

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
    verifItem(produit);
}
function verifItem(produit){
    let cartItems = localStorage.getItem('ProduitDansPanier');
    let trouver = false;
    cartItems = JSON.parse(cartItems);
    if (cartItems != null){
        for (const [key, value] of Object.entries(cartItems)){
            if (estMemeProduit(value,produit)){
                cartItems[key].dansPanier += 1;
                trouver = true;
                break
            }
        }
        if (!trouver){
            cartItems = {
                ...cartItems,
                [index]: produit
            }
            produit.dansPanier = 1;
            index += 1;
        }
    }
    else {
        produit.dansPanier = 1;
        cartItems = {
            [index] : produit
        }
        index += 1;
    }
    localStorage.setItem("ProduitDansPanier", JSON.stringify(cartItems));
}

function estMemeProduit(produitA, produitB){
    return (produitA.modele === produitB.modele && produitA.couleur === produitB.couleur && produitA.stockage === produitB.stockage && produitA.assurance === produitB.assurance)
}

//On doit ajouter les prix de chaque modèle afin de pouvoir afficher un panier complet
function CoutTotal(produit) {
    console.log("Le prix du produit est : ", produit);
}
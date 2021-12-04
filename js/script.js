function onLoadCartNumbers() {
    let nb = localStorage.getItem('nbElements');

    if (nb) {
        document.querySelector('#nbPanier').textContent = `(${nb})`;
    }
}

onLoadCartNumbers();
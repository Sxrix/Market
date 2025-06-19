// Sélectionner les boutons "Ajouter au panier"
const boutonsAjouter = document.querySelectorAll('.ajouter-au-panier');
const listeProduits = document.getElementById('liste-produits');
const totalElement = document.getElementById('total');
let total = 0;

// Ajouter un événement à chaque bouton
boutonsAjouter.forEach(bouton => {
  bouton.addEventListener('click', () => {
    const produit = bouton.parentNode;
    const nomProduit = produit.querySelector('img').alt;
    const prixProduit = produit.querySelector('u').nextSibling.textContent.trim();
    const prix = parseFloat(prixProduit.replace('€', ''));

    // Ajouter le produit à la liste
    const li = document.createElement('li');
    li.textContent = `${nomProduit} - ${prixProduit}`;
    listeProduits.appendChild(li);

    // Mettre à jour le total
    total += prix;
    totalElement.textContent = total.toFixed(2);
  });
});


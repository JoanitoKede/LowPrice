// Fonction pour simuler une API de comparaison de prix
async function fetchProductData(query) {
    // Simuler un délai de réponse d'API
    return new Promise((resolve) => {
        setTimeout(() => {
            // Exemples de résultats basés sur la requête
            const results = [
                { name: 'Produit A', price: '10€', link: 'https://example.com/produit-a' },
                { name: 'Produit B', price: '15€', link: 'https://example.com/produit-b' },
                { name: 'Produit C', price: '20€', link: 'https://example.com/produit-c' },
            ];
            resolve(results.filter(product => product.name.toLowerCase().includes(query.toLowerCase())));
        }, 1000); // Délai d'une seconde pour simuler une API
    });
}

// Récupérer la requête de recherche
const params = new URLSearchParams(window.location.search);
const query = params.get('query');

// Afficher les résultats
fetchProductData(query).then(filteredResults => {
    const resultsContainer = document.getElementById('resultsContainer');
    if (filteredResults.length > 0) {
        filteredResults.forEach(product => {
            const productItem = document.createElement('div');
            productItem.innerHTML = `<a href="${product.link}" target="_blank">${product.name}</a> - ${product.price}`;
            resultsContainer.appendChild(productItem);
        });
    } else {
        resultsContainer.innerHTML = '<p>Aucun produit trouvé.</p>';
    }
});

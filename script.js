document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const query = document.getElementById('searchInput').value;
    
    // Redirection vers la page de résultats avec la recherche
    window.location.href = `results.html?query=${encodeURIComponent(query)}`;
});

// Exemple de données pour les suggestions (à remplacer par une API réelle)
const suggestions = ['Produit A', 'Produit B', 'Produit C', 'Produit D', 'Produit E'];

document.getElementById('searchInput').addEventListener('input', function() {
    const inputValue = this.value.toLowerCase();
    const suggestionsBox = document.getElementById('suggestions');
    suggestionsBox.innerHTML = ''; // Réinitialiser les suggestions
    
    if (inputValue) {
        const filteredSuggestions = suggestions.filter(product => product.toLowerCase().includes(inputValue));
        filteredSuggestions.forEach(suggestion => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = suggestion;
            suggestionItem.onclick = () => {
                document.getElementById('searchInput').value = suggestion; // Remplir le champ de recherche
                suggestionsBox.innerHTML = ''; // Réinitialiser les suggestions
            };
            suggestionsBox.appendChild(suggestionItem);
        });
    }
});

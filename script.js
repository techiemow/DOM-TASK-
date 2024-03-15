const SearchWordarr = []; //to Add all the searched words
async function handleSearch() {
    const searchWord = document.getElementById('search').value;
    if (searchWord.trim() === '') {
        alert('Please enter a word to search.');//If there is no word present in the input it gives an alert. 
        return;
    }

    try {
        SearchWordarr.push(searchWord);
        let search = document.querySelector(".SearchWord")
        search.innerHTML = "<h1> Words that are searched in the Dictionary</h1>"
        search.innerHTML += SearchWordarr.join('<br>')
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`);
        const data = await response.json();
        displayResult(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('An error occurred. Please try again later.');
    }
};
// Event listener for the search button click to perform handleSearch function 
document.getElementById('searchBtn').addEventListener('click', handleSearch);

// Event listener for the Enter key press to perform handleSearch function 
document.getElementById('search').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});


function displayResult(data) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';

    if (!data || data.length === 0) {
        resultContainer.innerHTML = 'No definitions found.';
        return;
    }

    const definitionList = document.createElement('ul');

    // Iterate over each entry in the data array
    data.forEach(entry => {
        // Each entry may have multiple meanings, so iterate over them
        entry.meanings.forEach(meaning => {
            // Each meaning may have multiple definitions, so iterate over them
            meaning.definitions.forEach(definition => {
                const listItem = document.createElement('li');
                // Adding each definitions as list in the unordered manner
                listItem.textContent = definition.definition;
                definitionList.appendChild(listItem);
            });
        });
    });

    resultContainer.appendChild(definitionList);
}

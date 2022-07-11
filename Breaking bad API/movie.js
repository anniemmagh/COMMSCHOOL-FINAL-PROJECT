const inpSearch = document.getElementById('inp-search');
const output = document.getElementById('output');

window.addEventListener('load', () => {
    loader();
    fetchCharcters();
});

inpSearch.addEventListener('change', () => {
    let searchQuery = inpSearch.value;
    loader();
    fetchCharcters(searchQuery);
});

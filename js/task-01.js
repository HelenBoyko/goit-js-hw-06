// Number of categories: 3
const numbCategories = document.querySelectorAll('li.item');
console.log(`Number of categories:`, numbCategories.length);

numbCategories.forEach((item) => {
    const itemName = item.querySelector("h2").textContent;
    const itemElem = item.querySelectorAll("li").length;
    
    console.log('Category:', itemName);
    console.log('Elements:', itemElem);

});
  
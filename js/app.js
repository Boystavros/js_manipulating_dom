document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    const form = document.querySelector('#new-cuddly-form');
    form.addEventListener('submit', handleFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAll);
})

const handleFormSubmit = function(event) {
    event.preventDefault();
    console.log(event)
    
    const cuddlyDirectoryItem = createCuddlyDirectoryItem(event.target); 
    const cuddlyDirectory = document.querySelector('#cuddly-directory');
    cuddlyDirectory.appendChild(cuddlyDirectoryItem);

    event.target.reset();
}

const createCuddlyDirectoryItem = function(form) {
    const cuddlyDirectoryItem = document.createElement('li');
    cuddlyDirectoryItem.classList.add('cuddly-directory-item');

    const name = document.createElement('h2');
    name.textContent = `Name: ${form.name.value}`;
    cuddlyDirectoryItem.appendChild(name);

    const species = document.createElement('h3');
    species.textContent = `Species: ${form.species.value}`;
    cuddlyDirectoryItem.appendChild(species);

    const owner = document.createElement('p');
    owner.textContent = `Owner: ${form.owner.value}`;
    cuddlyDirectoryItem.appendChild(owner);

    const cleaning = document.createElement('p');
    cleaning.textContent = `Cleaning: ${form.cleaning.value}`;
    cuddlyDirectoryItem.appendChild(cleaning);

    return cuddlyDirectoryItem;
}

const handleDeleteAll = function() {
    const cuddlyDirectory = document.querySelector('#cuddly-directory');
    cuddlyDirectory.innerHTML = '';
}
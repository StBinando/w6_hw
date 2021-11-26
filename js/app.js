document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');
    document.querySelector('#new-item-form').addEventListener('submit', handleForm);
  })

  const addDeleteButton = function (){
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "wipe board";
    deleteButton.id = "Delete";
    const body = document.querySelector('body')
    const accordion = document.querySelector('#accordion');
    body.insertBefore(deleteButton, accordion);
    document.querySelector('#Delete').addEventListener('click', handleDelete);
  }

  const handleDelete = function(){
    clearList();
    removeButton();
  }

  const handleForm = function(){
    event.preventDefault();

    const newWhisky = document.createElement('li');
    const newName = document.createElement('h3');
    const newRegion = document.createElement('h5');
    // const newAlc = document.createElement('h4'); // ----REMOVED
    const newPrice = document.createElement('h4');
    
    newWhisky.classList.add('whisky');

    newName.textContent = this.name.value;
    newName.classList.add('W_name');
    
    newRegion.textContent = `(${this.region.value})`;
    newRegion.classList.add('W_region');
    
    // newAlc.textContent = `${this.alc.value}%`; // ----REMOVED
    // newAlc.classList.add('W_alc'); // ----REMOVED

    newPrice.textContent = `£${this.price.value}`;
    newPrice.classList.add('W_price');
    document.querySelector('#check').checked = false;

    const list = document.querySelector('#whisky-list');
    list.appendChild(newWhisky);
    
    newWhisky.appendChild(newName);
    newWhisky.appendChild(newRegion);
    // newWhisky.appendChild(newAlc); // ----REMOVED
    newWhisky.appendChild(newPrice);
    document.querySelector('#new-item-form').reset();

    const firstWhisky = document.querySelector('h3').textContent;
    if (firstWhisky === newName.textContent){
    addDeleteButton();
    }
  }

// ----- HELPER FUNCTIONS? -----
function clearList(){
    document.querySelector('ul').innerHTML = "";
} 

function removeButton(){
    const parent = document.querySelector('body');
    const deleteBtn = document.querySelector('button');
    parent.removeChild(deleteBtn);
}
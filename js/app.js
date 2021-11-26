document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');
    document.querySelector('#new-item-form').addEventListener('submit', handleForm);  
  })

  const handleForm = function(){
      event.preventDefault();
      console.log(this.name.value)

      const newWhisky = document.createElement('li');
      const newName = document.createElement('h3');
      const newRegion = document.createElement('h5');
      const newAlc = document.createElement('h4');
      const newPrice = document.createElement('h4');

      newWhisky.classList.add('whisky');
      newName.textContent = this.name.value;
      newRegion.textContent = this.region.value;
      newAlc.textContent = this.alc.value;
      newPrice.textContent = this.price.value;

      const list = document.querySelector('#whisky-list');
      list.appendChild(newWhisky);
      
      newWhisky.appendChild(newName);
      newWhisky.appendChild(newRegion);
      newWhisky.appendChild(newAlc);
      newWhisky.appendChild(newPrice);

      document.querySelector('#new-item-form').reset();
  }
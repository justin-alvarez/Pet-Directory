const main = document.querySelector('main');
let html = '';

for ( let i = 0; i < pets.length; i++) {
    let pet = pets[i];
    html += `
    <h2>${pet.name}</h2>
      <h3>${pet.type} | ${pet.breed}</h3>
      <p>Age: ${pet.age}</p>
      <img src=${pet.photo} alt=${pet.alt}> 
    
    `;

}

main.insertAdjacentHTML('beforeend',html);
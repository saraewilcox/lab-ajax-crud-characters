const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
     charactersAPI.getFullList()
       .then(response => {
      //console.log(response)
      const characters = response.data;
      document.querySelector('.characters-container').innerHTML = '';
      characters.forEach((character) => {
        document.querySelector('.characters-container').innerHTML += `
          <div class="character-info">
            <div class="name">Name: ${character.name}</div>
            <div class="occupation">Occupation: ${character.occupation}</div>
            <div class="cartoon">Is a Cartoon? ${character.cartoon ? 'Yes' : 'No'}</div>
            <div class="weapon">Weapon: ${character.weapon}</div>
          </div>`;
    });
  })
})
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.getElementById("character-id").value;
    charactersAPI.getOneRegister(id)
      .then(response => {
        console.log(response)
        const character = response.data;
        // document.querySelector('.characters-container').innerHTML = '';
        // ((character) => {
        document.querySelector('.characters-container').innerHTML += `
          <div class="character-info">
            <div class="name">Name: ${character.name}</div>
            <div class="occupation">Occupation: ${character.occupation}</div>
            <div class="cartoon">Is a Cartoon? ${character.cartoon ? 'Yes' : 'No'}</div>
            <div class="weapon">Weapon: ${character.weapon}</div>
          </div>`;
    });
  })

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.getElementById("character-id-delete").value;
    charactersAPI.deleteOneRegister(id)
      .then(response => {
        console.log(response)
  });
})

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const id = document.getElementById('edit-id').value;
    const characterInfo = {
      name: document.getElementById('edit-name').value,
      occupation: document.getElementById('edit-occupation').value,
      weapon: document.getElementById('edit-weapon').value,
      cartoon: document.getElementById('edit-cartoon').checked,
    };
    
    const editedChar = charactersAPI.updateOneRegister(id, characterInfo);
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const characterInfo = {
      name: document.getElementById('new-name').value,
      occupation: document.getElementById('new-occupation').value,
      weapon: document.getElementById('new-weapon').value,
      cartoon: document.getElementById('new-cartoon').checked,
    };

    const createdChar = charactersAPI.createOneRegister(characterInfo);
  });
});
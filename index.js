const main = document.querySelector(".main-container");
const picture = document.getElementById("picture");
const popup = document.querySelector(".popup");
const fetchPokemon = () => {
  for (i = 1; i < 650; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}/`
    fetch(url)
      .then((res)=>res.json())
      .then((data)=> {
        const pokemon = {
          image: data.sprites.front_default,
          name: data.name,
          id: data.id,
          type: data.types[0].type.name
        }
        const container = document.createElement("div");
        container.classList.add("container");
        cardBackground();
        container.innerHTML = 
        `<img src='${pokemon.image}'/>
        <h2>${pokemon.name}</h2>
        <h3>No.${pokemon.id}</h3>`
        function cardBackground() {
          if (pokemon.type === 'fire') {
            container.style.backgroundColor = '#9e0916';
          } else if (pokemon.type === 'water') {
            container.style.backgroundColor = '#0c1378';
          } else if (pokemon.type === 'grass') {
            container.style.backgroundColor = '#045219';
          } else if (pokemon.type === 'normal') {
            container.style.backgroundColor = '#9c9779';
          } else if (pokemon.type === 'flying') {
            container.style.backgroundColor = '#0e5447';
          } else if (pokemon.type === 'bug') {
            container.style.backgroundColor = '#62b36c';
          } else if (pokemon.type === 'poison') {
            container.style.backgroundColor = '#740782';
          } else if (pokemon.type === 'electric') {
            container.style.backgroundColor = '#98b315';
          } else if (pokemon.type === 'ground') {
            container.style.backgroundColor = '#3e4226';
          } else if (pokemon.type === 'fighting') {
            container.style.backgroundColor = '#5c0c05';
          } else if (pokemon.type === 'psychic') {
            container.style.backgroundColor = '#8f1476';
          } else if (pokemon.type === 'rock') {
            container.style.backgroundColor = '#363124';
          } else if (pokemon.type === 'ice') {
            container.style.backgroundColor = '#849dbd';
          } else if (pokemon.type === 'ghost') {
            container.style.backgroundColor = '#380738';
          } else if (pokemon.type === 'dragon') {
            container.style.backgroundColor = '#0c0847';
          } else if (pokemon.type === 'dark') {
            container.style.backgroundColor = '#241306';
          } else if (pokemon.type === 'steel') {
            container.style.backgroundColor = '#666564';
          } else if (pokemon.type === 'fairy') {
            container.style.backgroundColor = '#ad0575';
          }
        }
        main.appendChild(container);
        container.addEventListener("click", ()=> {
          picture.innerHTML = `<img src="${pokemon.image}" alt="sprite" height="170" />` 
          // CONSOLE LOG DATA, EDIT STATS IN HTML
          main.classList.add("active");
          popup.classList.remove("active");
        })
      })
  }
}
fetchPokemon();
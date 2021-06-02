"use strict";

//Llamada al API
// const getDataFromApi = (pokemon) => {
//   const inputValue = pokemon.toLowerCase();
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
//     .then((response) => response.json())
//     .then((data) => {
//       const pokemon = {
//         pokemonName: data.name,
//         image: data.sprites.other["official-artwork"].front_default,
//         type: data.types.map((type) => type.type.name),
//         weight: data.weight,
//         height: data.height,
//       };
//       console.log(data);
//       return pokemon;
//     });
// };

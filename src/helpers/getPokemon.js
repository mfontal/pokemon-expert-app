export const getPokemon = async (pokemon) => {
   const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
   const resp = await fetch(url);

   const pokeInfo = await resp.json();

   // const typesArray = pokeInfo.types.map(type => {type.type.name});
   // const typesArray = types.map(type => type.type.name);
   const getPokemonInfo = () => ({
      id: pokeInfo.id,
      sprite: pokeInfo.sprites.front_default,
      // types: {typesArray},
   });

   // Uso de la función para obtener la información deseada
   const pokemonInfo = getPokemonInfo();
   // console.log(pokemonInfo);

   return pokemonInfo;
};

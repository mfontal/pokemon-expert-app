export const getPokemon = async (pokemon) => {
   const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
   const resp = await fetch(url);

   const pokeInfo = await resp.json();
   // console.log(pokeInfo);

   /* const { id, sprites, types } = await resp.json();

   const typesArray = types.map((type) => type.type.name); */
   const getPokemonInfo = () => ({
      id: pokeInfo.id,
      sprite: pokeInfo.sprites.front_default,
      types: pokeInfo.types,
   });

   // Uso de la función para obtener la información deseada
   const pokemonInfo = getPokemonInfo();
   // console.log(pokemonInfo);

   return getPokemonInfo;
};

/* var miObjetoJSON = {
   nombre: "Juan",
   apellido: "Pérez",
   edad: 30,
   direcciones: [
      {
         numero: 1,
         direccion: {
            calle: "Calle 123",
            ciudad: "Buenos Aires",
            pais: "Argentina",
         },
      },
      {
         numero: 2,
         direccion: {
            calle: "Calle 123",
            ciudad: "Bogotá",
            pais: "Colombia",
         },
      },
   ],
}; */

var poke = {
   id: 384,
   sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
   types: Array["dragon", "flying"],
};

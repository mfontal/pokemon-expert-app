import { useEffect, useState } from "react";
import { getPokemon } from "../helpers/getPokemon";

export const PokemonCard = ({ pokemon }) => {
   const [pokemonData, setPokemonData] = useState({
      /* id: 384,
      sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
      types: [
         {
            slot: 1,
            type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
         },
         {
            slot: 2,
            type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
         },
      ], */
   });
   console.log(pokemonData);


   const getPokemonData = async () => {
      const newPokemonData = await getPokemon(pokemon);
      setPokemonData(newPokemonData);
   };

   useEffect(() => {
      getPokemonData();
   }, []);

   return (
      <div className="PokemonCard">
      <h2>{pokemon}</h2>
      <img src={pokemonData.sprite} alt="Rayquaza" />
      <p>PokeDex: {pokemonData.id}</p>
      <p>Tipo: {pokemonData.types[0].type.name}</p>
      {/* {pokemonData.types.map((type) => (
        <p key={type.slot}>Tipo: {type.type.name}</p>
      ))} */}
    </div>
   );
};

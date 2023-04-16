import React from "react";
import { useState } from "react";
// import { InputAddPokemon } from "./components/InputAddPokemon";
// import { PokemonCardGrid } from "./components/PokemonCardGrid";
import { InputAddPokemon, PokemonCardGrid } from "./components/";

export const PokemonExpertApp = () => {
   const [pokemonList, setPokemonList] = useState([
      "rayquaza",
   ]);

   const updatePokemonList = (newPokemon) => {
      if (pokemonList.includes(newPokemon)) {
         return;
      }
      setPokemonList([...pokemonList, newPokemon]);
   };

   return (
      <>
         {/* Titulo  */}
         <h1>Pokemon Expert app</h1>
         {/* Input */}
         <InputAddPokemon
            updatePokemonFunction={updatePokemonList}
            listaPokemon={pokemonList}
         />
         {/* Grilla */}
         <PokemonCardGrid pokemons={pokemonList} />
      </>
   );
};

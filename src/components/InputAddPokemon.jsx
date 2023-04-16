import { useState } from "react";

export const InputAddPokemon = ({ updatePokemonFunction, listaPokemon }) => {
   const [inputValue, setInputValue] = useState("");

   const changeInputValue = (inputEvt) => {
      setInputValue(inputEvt.target.value);
   };

   const updatePokemonList = (formEvt) => {
      event.preventDefault();
      if (inputValue.trim().length <= 1) {
         return;
      }
      const pokemonName =
         inputValue.charAt(0).toLowerCase() + inputValue.slice(1);
      updatePokemonFunction(pokemonName);
      setInputValue("");
   };

   return (
      <form onSubmit={updatePokemonList}>
         <input
            type="text"
            onChange={changeInputValue}
            placeholder={listaPokemon[0]}
            value={inputValue}
         />
      </form>
   );
};

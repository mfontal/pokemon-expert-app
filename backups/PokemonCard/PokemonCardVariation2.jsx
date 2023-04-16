import { useEffect, useState } from "react";
import { getPokemon } from "../helpers/getPokemon";
import { useFetchPokemons } from "../hooks/useFetchPokemons";

export const PokemonCard = ({ pokemon }) => {

   /* const [pokemonData, setPokemonData] = useState({});
   // console.log(pokemonData);
   
   
   const getPokemonData = async () => {
      const newPokemonData = await getPokemon(pokemon);
      setPokemonData(newPokemonData);
   };
   
   useEffect(() => {
      getPokemonData();
   }, []); */
   
   const { pokemonData, isLoading } = useFetchPokemons(pokemon)
   
   // console.log({pokemonData, isLoading});

   return (
      <div className="PokemonCard">
         <h2>{pokemon}</h2>
         {isLoading && (<h2>Cargando</h2>)}
         <img src={pokemonData.sprite} alt="Rayquaza" />
         <p>PokeDex: {pokemonData.id}</p>
      </div>
   );
};

// import { PokemonCard } from "./PokemonCard";
import { PokemonCard } from "./PokemonCard";

export const PokemonCardGrid = ({ pokemons }) => {
   

   return (
      <div className="PokemonCardGrid">
         {pokemons.map((pokemon) => (
            <PokemonCard
               key={pokemon}
               pokemon={pokemon}
            />
         ))}
      </div>
   );
};

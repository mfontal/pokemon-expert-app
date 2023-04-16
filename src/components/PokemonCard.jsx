import { useFetchPokemons } from "../hooks/useFetchPokemons";

export const PokemonCard = ({ pokemon }) => {

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

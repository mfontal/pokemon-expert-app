import { useEffect, useState } from "react";
import { getPokemon } from "../helpers/getPokemon";

export const useFetchPokemons = (pokemon) => {

    const [pokemonData, setPokemonData] = useState({});
    // console.log(pokemonData);

    const [isLoading, setIsLoading] = useState(true)


    const getPokemonData = async () => {
        const newPokemonData = await getPokemon(pokemon);
        setPokemonData(newPokemonData);
        setIsLoading(false);
    };

    useEffect(() => {
        getPokemonData();
    }, []);

    return ({
        pokemonData,
        isLoading
    })
}

import axios from "axios";
import { useEffect, useState } from "react";


function usePokemon(id) {

    const [pokemon,setPokemon]=useState(null)
    const POKEMON_DETAILS_URL = `https://pokeapi.co/api/v2/pokemon/${id}`

    

    async function downloadPokemonDetails() {
        const response = await axios.get(POKEMON_DETAILS_URL)
        console.log("hllo response",response);
       const pokemon = await response.data;

        setPokemon({
            name:pokemon.name,
            height:pokemon.height,
            weight:pokemon.weight,
            types:pokemon.types,
            image:pokemon.sprites.other.dream_world.front_default
        })
    }

    useEffect(()=>{
        downloadPokemonDetails()
    },[])
   return [pokemon];
}

export default usePokemon;
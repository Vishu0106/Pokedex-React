import axios from "axios";
import { useEffect, useState } from "react";
import downloadPokemonsData from "../utils/dwonloadPokemon";
import { useParams } from "react-router-dom";


function usePokemon(pokemonName) {
    const {id} = useParams()

    const [pokemon,setPokemon]=useState(null)
    const POKEMON_DETAILS_URL = `https://pokeapi.co/api/v2/pokemon/`

    const [pokemonListState, setPokemonListState] = useState({
        pokemonList:[],
        pokedexUrl:'',
        nextUrl:'',
        prevUrl:''
    })

    async function downloadPokemonDetails(id) {
        const response = await axios.get(POKEMON_DETAILS_URL+((pokemonName)?pokemonName:id))
        console.log("hllo response",response);
       const pokemon = await response.data;

        setPokemon({
            name:pokemon.name,
            height:pokemon.height,
            weight:pokemon.weight,
            types:pokemon.types,
            image:pokemon.sprites.other.dream_world.front_default
        })
        const types = response.data.types.map(t=>t.type.name);
        return types[0];
    }

    async function downloadPokemonAndRedlated(id) {
      try {
        const type =  await downloadPokemonDetails(id);
          await downloadPokemonsData(pokemonListState,setPokemonListState,`https://pokeapi.co/api/v2/type/${type}`)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(()=>{
        downloadPokemonAndRedlated(id)
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    },[id,pokemonName])
   return [pokemon , pokemonListState];
}

export default usePokemon;
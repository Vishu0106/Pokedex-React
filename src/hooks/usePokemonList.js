import axios from "axios";
import { useEffect, useState } from "react";


function usePokemonList() {

        // const [pokemonList , setPokemonList] = useState([])
        const DEFAULT_URL = 'https://pokeapi.co/api/v2/pokemon';

        //  const [pokedexUrl,setPokedexUrl] = useState(DEFAULT_URL);
        
        //   const [nextUrl , setNextUrl] = useState(DEFAULT_URL);
        
        //   const [prevUrl , setPrevUrl] = useState(DEFAULT_URL);
          
        const [pokemonListState, setPokemonListState] = useState({
            pokemonList:[],
            pokedexUrl:DEFAULT_URL,
            nextUrl:DEFAULT_URL,
            prevUrl:DEFAULT_URL
        })
        
         async function  downloadPokemonsData() {
        
            const response = await axios.get(pokemonListState.pokedexUrl?pokemonListState.pokedexUrl:DEFAULT_URL);
        
            // setNextUrl(response.data.next)
            // setPrevUrl(response.data.previous)
        
            // setPokemonListState((state)=>({...state,nextUrl:response.data.next,prevUrl:response.data.previous}))
            
            const pokemonResult = response.data.results;
        
            const pokemonPromise = pokemonResult.map((pokemon)=> axios.get(pokemon.url))
        
            const pokemonListData = await axios.all(pokemonPromise)
        
            console.log('list');
        
            const pokemonFinalList = pokemonListData.map(pokemonData => {
                const pokemon = pokemonData.data;
                return {
                    id:pokemon.id,
                    name:pokemon.name,
                    image:pokemon.sprites.other.dream_world.front_default,
                    types:pokemon.types
                }
            })
           setPokemonListState((state)=>({...state,pokemonList:pokemonFinalList,nextUrl:response.data.next,prevUrl:response.data.previous}))
         }
          
        
        
            useEffect(()=>{
        
                downloadPokemonsData();
                console.log(1+1)
        
            },[pokemonListState.pokedexUrl]);

            return [pokemonListState,setPokemonListState]

}

export default usePokemonList;
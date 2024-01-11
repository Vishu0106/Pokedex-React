import axios from "axios";
import { useEffect, useState } from "react";
import downloadPokemonsData from '../utils/dwonloadPokemon.js'


function usePokemonList(DEFAULT_URL) {

        // const [pokemonList , setPokemonList] = useState([])
        

        //  const [pokedexUrl,setPokedexUrl] = useState(DEFAULT_URL);
        
        //   const [nextUrl , setNextUrl] = useState(DEFAULT_URL);
        
        //   const [prevUrl , setPrevUrl] = useState(DEFAULT_URL);
          
        const [pokemonListState, setPokemonListState] = useState({
            pokemonList:[],
            pokedexUrl:DEFAULT_URL,
            nextUrl:DEFAULT_URL,
            prevUrl:DEFAULT_URL
        })
        
         
        
        
            useEffect(()=>{
        
                downloadPokemonsData(pokemonListState,setPokemonListState,DEFAULT_URL);
                console.log(1+1)
        
            },[pokemonListState.pokedexUrl]);

            return [pokemonListState,setPokemonListState]

}

export default usePokemonList;
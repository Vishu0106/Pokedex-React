// css import 
import './PokemonList.css'
import axios from 'axios';
import Pokemon from '../Pokemon/Pokemon'

import { useEffect, useState } from 'react';

function PokemonList() {

    const [pokemonList , setPokemonList] = useState([])
    const DEFAULT_URL = 'https://pokeapi.co/api/v2/pokemon';

 const [pokedexUrl,setPokedexUrl] = useState(DEFAULT_URL);

  const [nextUrl , setNextUrl] = useState(DEFAULT_URL);

  const [prevUrl , setPrevUrl] = useState(DEFAULT_URL);
 async function  downloadPokemonsData() {

    const response = await axios.get(pokedexUrl?pokedexUrl:DEFAULT_URL);

    setNextUrl(response.data.next)
    setPrevUrl(response.data.previous)
    
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
    setPokemonList(pokemonFinalList)
 }
  


    useEffect(()=>{

        downloadPokemonsData();
        console.log(1+1)

    },[pokedexUrl]);
    return(
        <div className='pokemon-list-area'>
           <div><h1>pokemon list</h1></div>

           <div className='pokemon-list'>{pokemonList.map(pokemon => <Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image}/>)}</div>
           <div className='page-controls'>
                <button onClick={()=>setPokedexUrl(prevUrl)}>Prev</button>
                <button onClick={()=>setPokedexUrl(nextUrl)}>Next</button>
           </div>
        </div>
    )
}

export default PokemonList;
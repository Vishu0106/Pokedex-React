// css import 
import './PokemonDetails.css'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

function PokemonDetails() {

    const {id} = useParams()
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
    console.log("hillo",pokemon);
    return(
        <>
            <h1 className="pokedex-redirect">
                <Link to='/'>
                    Pokedex
                </Link>
            </h1>
        {pokemon && <div className='pokemon-details-wrapper'>
         <div className='pokemon-detail-name'>
            {pokemon.name}
         </div>
         <div className='pokemon-image'>
           <img src={pokemon.image}/>
         </div>
         <div className='pokemon-attr'>
           Weight : {pokemon.weight}
           Height : {pokemon.height}
         </div>
         <div>

            <h1>Types:</h1>{pokemon.types.map(t=><span className='type' key={t.type.name}>{t.type.name}</span>)}

         </div>
        </div>}
        </>
    )
}

export default PokemonDetails
// css import 
import './PokemonDetails.css'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
import usePokemon from '../../hooks/usePokemon'
import Pokemon from '../Pokemon/Pokemon'



function PokemonDetails({pokemonName}) {
  
    const [pokemon,pokemonListState] = usePokemon(pokemonName);
    
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
        <div className='similar-pokemons'>
        <h2>Smilar Pokemons</h2>
        <div className='pokemon-smilar-boxes'>

            {pokemonListState.pokemonList.length>0 && 
                pokemonListState.pokemonList.map((pokemon)=> <Pokemon key={pokemon.id} name={pokemon.name} id={pokemon.id} url={pokemon.image}/>)
            }

        </div>
        </div>
        </>
    )
}

export default PokemonDetails
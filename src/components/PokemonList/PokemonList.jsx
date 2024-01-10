// css import 
import './PokemonList.css'
import Pokemon from '../Pokemon/Pokemon'
import usePokemonList from '../../hooks/usePokemonList';

function PokemonList() {
    
    const [pokemonListState,setPokemonListState] = usePokemonList();

    return(
        <div className='pokemon-list-area'>
           <div><h1>pokemon list</h1></div>

           <div className='pokemon-list'>{pokemonListState.pokemonList.map(pokemon => <Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id}/>)}</div>
           <div className='page-controls'>
                <button onClick={()=>setPokemonListState((state)=>({...state,pokedexUrl:pokemonListState.prevUrl}))}>Prev</button>
                <button onClick={()=>setPokemonListState((state)=>({...state,pokedexUrl:pokemonListState.nextUrl}))}>Next</button>
           </div>
        </div>
    )
}

export default PokemonList;
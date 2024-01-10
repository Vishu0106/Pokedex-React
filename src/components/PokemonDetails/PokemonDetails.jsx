// css import 
import './PokemonDetails.css'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
import usePokemon from '../../hooks/usePokemon'



function PokemonDetails() {
    const {id} = useParams()
    const [pokemon] = usePokemon(id);
    
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
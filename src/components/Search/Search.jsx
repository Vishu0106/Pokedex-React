import useDebounce from '../../hooks/useDebounce';
import './Search.css'

function Search({updateSearchTerm}) {
  const debounceUpdateSearch = useDebounce((e)=>updateSearchTerm(e.target.value))
    return(
        <>
          <input
          id='search-pokemon'
          type="text" placeholder='which pokemon you are looking for...?s'
          onChange={debounceUpdateSearch} />
        </>
    )
}

export default Search;
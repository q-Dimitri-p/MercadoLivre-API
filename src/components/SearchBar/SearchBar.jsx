import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import './SearchBar.css'
import fetchProducts from '../../api/fetchProducts'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'



function SearchBar() {


    const { setProducts, setLoading } = useContext(AppContext)
    const [SearchValue, setSearchValue] = useState('')


    const handleSearch = async (event) => {
        event.preventDefault()
        setLoading(true)

        const products = await fetchProducts(SearchValue)
        setProducts(products)
        setLoading(false)
        setSearchValue('')
    }


    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <input type="search"
                placeholder="Buscar"
                value={SearchValue}
                className="searchinput"
                onChange={({ target }) => setSearchValue(target.value)}
                required />
            <button type="submit" className="searchbutton">
                <BsSearch />
            </button>
        </form>
    )
}

export default SearchBar
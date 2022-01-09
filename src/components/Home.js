import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [search, setSearch] = useState("")
    return (
        <div className='HomeBg'>
        <div className='Home'>
            <h1>Search for your favourite movies and tv shows!.</h1>
            <input type='text' placeholder='Search Movies, TV shows and more...' onChange={(event)=>{setSearch(event.target.value)}} value={search}></input>
        <button type='submit'>
            <Link to={`/showmovie/${search}`}>Search</Link>
        </button>

        </div>
        </div>
    )
}

export default Home

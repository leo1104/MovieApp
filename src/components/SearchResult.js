import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';
function SearchResult() {
    const { movie } = useParams();
    const url = `https://imdb-api.com/en/API/Search/k_01clohoe/${movie}`
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(url).then((res)=>{
            setData(res.data.results)
        })
    }, [])
    return (
        <div className='movie_Cards'>
            {
                data.map((movee)=>{
                    return(
                        <div className='movieCard' key={movee.id} >
                            <Link style={{color:"white",textDecoration:"none"}} to={`/movie/${movee.id}`}>
                            <img className='searchImg' style={{width:"12rem",height:"auto",margin:"auto",display:"flex"}} alt='Not Found'src={movee.image}/>
                            <h2 style={{textAlign:"center",fontSize:"1rem"}}>{movee.title} <span>{movee.description}</span> </h2>
                            
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SearchResult

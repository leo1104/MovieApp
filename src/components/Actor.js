import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';
function Actor() {
    const { actorId }=useParams();
    const url = `https://imdb-api.com/en/API/Name/k_01clohoe/${actorId}`
    const [data, setData] = useState([])
    const [movies,setMovies]= useState([])
    useEffect(() => {
        axios.get(url).then((res)=>{
            setData(res.data)
            setMovies(res.data.knownFor.slice(0, 3));
        })
    }, [])
    
    return (
        <div>
            <div className='actorCircle'>
            <img src={data.image}/>
            </div>
            <div className='actorDetails'>
            <h1>{data.name}</h1>
            <h5 style={{textAlign:"center"}}>{data.role}</h5>
            <p>{data.summary}</p>
            <h2>{data.awards}</h2>
            </div>
            <div className='ActorMovies'>
            {
                movies.map((movie)=>{
return(<div className='ActorCard'>
    <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`}>
    <img src={movie.image}/>
    <h3>{movie.title}</h3>
    </Link>
    </div>    )
                })
            }
            </div>
        </div>
    )
}

export default Actor

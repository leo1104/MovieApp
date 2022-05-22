import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { loadData } from '../state/action';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
function Actor() {
    const { actorId }=useParams();
    const url = `https://imdb-api.com/en/API/Name/k_saouae7q/${actorId}`
    // const [data, setData] = useState([])
    const dispatch = useDispatch();
    const data = useSelector(state=>state.data.loadActors)
    const {loadActors} = bindActionCreators(actionCreators,dispatch)
    const [movies,setMovies]= useState([])
    useEffect(() => {
        axios.get(url).then((res)=>{
            // setData(res.data)
            setMovies(res.data.knownFor.slice(0, 3));
            loadActors(res.data)
        })
    }, [])
    console.log(data[data.length-1]);
    let newData=data[data.length-1]
// console.log(reduxData);    
    return (
<>
        {data.length>0?

        <div>
            <div className='actorCircle'>
            <img src={newData.image}/>
            </div>
            <div className='actorDetails'>
            <h1>{newData.name}</h1>
            <h5 style={{textAlign:"center"}}>{data.role}</h5>
            <p>{newData.summary}</p>
            <h2>{newData.awards}</h2>
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
        </div>:<div>Loading</div>}
        </>
    )
}

export default Actor

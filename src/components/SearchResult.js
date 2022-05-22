import React,{useEffect,useState,memo} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import {actionCreators} from '../state/index'
function SearchResult() {
    const { movie } = useParams();
    const url = `https://imdb-api.com/en/API/Search/k_saouae7q/${movie}`
    // const [data, setData] = useState([])
    const dispatch = useDispatch();
    const data = useSelector(state=>state.data.loadData)
    const {loadData} = bindActionCreators(actionCreators,dispatch)
    useEffect(() => {
        axios.get(url).then((res)=>{
            // setData(res.data.results)
            loadData(res.data.results)
        })
    }, [])
    // console.log(reduxdata);
    console.log(data);
    return (

<>
{data.length>0?
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
        </div>:
<div>No result found</div>
}
        </>
    )
}

export default memo(SearchResult)

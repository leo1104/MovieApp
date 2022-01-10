import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Movie() {
  const { movieId } = useParams();
  const url = `https://imdb-api.com/en/API/Title/k_saouae7q/${movieId}`;
  const url2 = `https://imdb-api.com/en/API/Trailer/k_saouae7q/${movieId}`;
  const [data, setData] = useState([]);
  const [actors, setActors] = useState([]);
  const [trailer,setTrailer]=useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
      setActors(res.data.actorList);
      console.log(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get(url2).then((res) => {
      setTrailer(res.data);
    });
  }, []);
  return (
    <>
    <div className="coverImg" style={{width:"auto",height:"80vh",display:"flex",justifyContent:"center"}}>
    <img src={trailer.thumbnailUrl} style={{cursor:"pointer"}}/>
    </div>
    <div className="MovieBody">
      <div className="MovieContainer">
        <div className="MovieRatings">
          <img src={data.image} />
          <p>
            <span> {data.imDbRating}</span> /10
          </p>
        </div>
        <div className="MovieDescription">
          <h1>{data.title}</h1>
          <p style={{lineHeight:0}}>{data.year}</p>
          <p style={{lineHeight:1.2}}>{data.genres}</p>
          <p style={{fontSize:"16px",letterSpacing:"2px"}}>{data.plot}</p>
          </div>
    </div>

{/* Cast */}
<div className='Cast'>
    <div className='CastHeading'>
<h1>Cast</h1>
<p>Cast overview, first billed only</p>
</div>
<div className='castName'>
            {actors.map((actor)=>{
                return (
                    <div  key={actor.id} >
                        <Link style={{textDecoration:"none"}} to={`/actor/${actor.id}`}>
                    <div className='castActor'>
                    <div className='castCircle'>
                    <img className='cardImg' src={actor.image}/>
                    </div>
                    <div className='castActorName'>
                    <h2>{actor.name}</h2>
                    <p>{actor.asCharacter}</p>
                    </div>
                    </div>
                    </Link>
                    </div>
                    
                )
            })}
            </div>
            </div>
        </div>      
    </>
  );
}

export default Movie;

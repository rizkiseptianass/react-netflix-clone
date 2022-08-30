import React, { useEffect, useState } from "react";
import axios from '../axios';
import './Row.css';

const Row = ({title, fetchUrl}) => {

    const [movies, setMovies] = useState([]);

    const base_url = 'https://image.tmdb.org/t/p/original/';

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl])

    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
            {movies.map(m => (
                <img className="row_poster" src={`${base_url}${m.backdrop_path}`} alt={m.name} key={m.id}></img>
            ))}
            </div>
        </div>
    )
}

export default Row;
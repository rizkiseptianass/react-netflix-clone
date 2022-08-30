import React, { useEffect, useState } from "react";
import axios from '../axios';
import requests from "../requests";
import './Banner.css';

const Banner = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchTrending)
            setMovies(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
        } 
        fetchData();
    }, []);

    const truncate = ((string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    })

    return(
        <header className="banner" style={{
            backgroundImage: `linear-gradient(to right, #111111, transparent),url('https://image.tmdb.org/t/p/original/${movies?.backdrop_path}')`,
            backgroundSize: 'cover',
            backgroundPosition: "center center",
        }}>
        <div className="banner_contents">
            <h1 className="banner_title">{movies?.title || movies?.name || movies?.original_name}</h1>
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_desc">{truncate(movies?.overview, 150)}</h1>
        </div>

        </header>
    )
}

export default Banner;
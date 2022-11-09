import React, { useState, useEffect } from 'react';

import MovieCard from '../movie-card/MovieCard';

import './movie-grid.scss';

const MovieGrid = props => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=5466b7f9715fde9407c767ec4cfbdb90&language=en-US")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setItems(data.results);
        })
      }, [])

      useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=5466b7f9715fde9407c767ec4cfbdb90&language=en-US")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setItems(data.results);
        })
      }, [])

    return (
    <div className="max">
        <h1>Movies</h1>
        <div className="movie-grid">
            {
                items.map((movieReq) => <MovieCard key={movieReq.id} {...movieReq}/>
                )
            }
        </div>
    </div>
    )
}

export default MovieGrid;
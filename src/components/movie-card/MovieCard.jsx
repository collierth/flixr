import React from 'react';

import './movie-card.scss';

import { Link } from 'react-router-dom';
import { category } from '../../api/tmdbApi';


const MovieCard = ({id, poster_path}) => {

    return (
        <div className="movie-card">
            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${id}`} >
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
            </Link>
        </div>
    );
}

export default MovieCard;